import {
  Check,
  CircleDashed,
  ChevronDown,
  Copy,
  Download,
  ExternalLink,
  Pencil,
  Plus,
  Trash2,
  X,
} from 'lucide-react';
import { Fragment, useEffect, useState } from 'react';

import { adminCopy } from '../../../../application/content/admin';
import {
  createAdminInvitation,
  deleteAdminInvitation,
  getAdminInvitation,
  getAdminRsvpExport,
  setAdminInvitationSent,
  updateAdminInvitation,
  type AdminInvitationDetail,
  type AdminRsvpOverview,
} from '../../../../common/api-connector';

import {
  ActionButton,
  AccountActions,
  CloseButton,
  ExpandedRow,
  Form,
  GroupCell,
  GuestList,
  GuestDetailTable,
  GuestAttendance,
  GuestInputRow,
  GuestMeta,
  GuestSection,
  GuestTag,
  GuestTags,
  Header,
  IconActions,
  IconButton,
  Link,
  LogoutButton,
  Metric,
  Modal,
  ModalBackdrop,
  ModalHeader,
  OpenButton,
  RowToggle,
  SentCheckbox,
  Status,
  SecondaryAction,
  SelectControl,
  Summary,
  Table,
  TableActions,
  TableScroll,
  TableSection,
} from './AdminDashboard.styled';

type Props = {
  email: string;
  onRefresh: () => Promise<void>;
  onSignOut: () => Promise<void>;
  overview: AdminRsvpOverview;
};

const getInvitationLink = (token: string) =>
  `${window.location.origin}/confirmar?token=${encodeURIComponent(token)}`;

const attendanceLabels = {
  attending: adminCopy.attendanceAttending,
  declined: adminCopy.attendanceDeclined,
  pending: adminCopy.attendancePending,
};

const escapeCsvValue = (value: string) => `"${value.replace(/"/g, '""')}"`;

export default function AdminDashboard({ email, onRefresh, onSignOut, overview }: Props) {
  const [detail, setDetail] = useState<AdminInvitationDetail | null>(null);
  const [expandedInvitation, setExpandedInvitation] = useState<AdminInvitationDetail | null>(null);
  const [contactPhone, setContactPhone] = useState('');
  const [copiedToken, setCopiedToken] = useState<string | null>(null);
  const [locale, setLocale] = useState<'ca' | 'es'>('es');
  const [editingInvitation, setEditingInvitation] = useState<AdminInvitationDetail | null>(null);
  const [groupName, setGroupName] = useState('');
  const [editGroupName, setEditGroupName] = useState('');
  const [editContactPhone, setEditContactPhone] = useState('');
  const [editLocale, setEditLocale] = useState<'ca' | 'es'>('es');
  const [editGuestName, setEditGuestName] = useState('');
  const [editGuests, setEditGuests] = useState<Array<{ full_name: string; id?: string }>>([]);
  const [guestName, setGuestName] = useState('');
  const [guestNames, setGuestNames] = useState<string[]>([]);
  const [hasDetailError, setHasDetailError] = useState(false);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [expandingInvitationId, setExpandingInvitationId] = useState<string | null>(null);
  const [sendingInvitationId, setSendingInvitationId] = useState<string | null>(null);

  const metrics = [
    { label: adminCopy.total, value: overview.totals.total },
    { label: adminCopy.attending, value: overview.totals.attending },
    { label: adminCopy.pending, value: overview.totals.pending },
    { label: adminCopy.declined, value: overview.totals.declined },
  ];

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') {
        return;
      }

      setIsCreateOpen(false);
      setIsEditOpen(false);
      setDetail(null);
      setEditingInvitation(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (!copiedToken) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => setCopiedToken(null), 2000);
    return () => window.clearTimeout(timeoutId);
  }, [copiedToken]);

  const selectInvitation = async (invitationId: string) => {
    setHasDetailError(false);
    const currentDetail = await getAdminInvitation(invitationId);
    if (!currentDetail) {
      setHasDetailError(true);
      return;
    }

    setDetail(currentDetail);
  };

  const toggleGuests = async (invitationId: string) => {
    if (expandedInvitation?.id === invitationId) {
      setExpandedInvitation(null);
      return;
    }

    setExpandingInvitationId(invitationId);
    const currentDetail = await getAdminInvitation(invitationId);
    setExpandingInvitationId(null);

    if (!currentDetail) {
      setHasDetailError(true);
      return;
    }

    setExpandedInvitation(currentDetail);
  };

  const handleCreateInvitation = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsCreating(true);
    const created = await createAdminInvitation(groupName, guestNames, contactPhone, locale);
    setIsCreating(false);

    if (!created) {
      return;
    }

    setGroupName('');
    setContactPhone('');
    setLocale('es');
    setGuestNames([]);
    setIsCreateOpen(false);
    setDetail(await getAdminInvitation(created.id));
    await onRefresh();
  };

  const copyLink = async (token: string) => {
    await navigator.clipboard.writeText(getInvitationLink(token));
    setCopiedToken(token);
  };

  const toggleInvitationSent = async (invitationId: string, isSent: boolean) => {
    setSendingInvitationId(invitationId);
    const updated = await setAdminInvitationSent(invitationId, isSent);
    setSendingInvitationId(null);

    if (updated) {
      await onRefresh();
    }
  };

  const exportCsv = async () => {
    const rows = await getAdminRsvpExport();
    if (!rows) {
      return;
    }

    const header = [
      'Grupo',
      'Comensal',
      'Asistencia',
      'Teléfono de contacto',
      'Persona que responde',
      'Dieta',
      'Alergias',
      'Observaciones',
      'Fecha de respuesta',
    ];
    const values = rows.map((row) => [
      row.group_name,
      row.guest_name,
      attendanceLabels[row.attendance],
      row.contact_phone ?? '',
      row.contact_name ?? '',
      row.dietary_options.join(', '),
      row.allergy_details ?? '',
      row.notes ?? '',
      row.submitted_at ?? '',
    ]);
    const csv = [header, ...values].map((row) => row.map(escapeCsvValue).join(';')).join('\n');
    const url = URL.createObjectURL(new Blob([`\ufeff${csv}`], { type: 'text/csv;charset=utf-8' }));
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = 'confirmaciones-boda.csv';
    anchor.click();
    URL.revokeObjectURL(url);
  };

  const deleteInvitation = async (invitationId: string) => {
    if (!window.confirm(adminCopy.deleteConfirmation)) {
      return;
    }

    if (await deleteAdminInvitation(invitationId)) {
      setDetail(null);
      await onRefresh();
    }
  };

  const addGuest = () => {
    const name = guestName.trim();
    if (!name) {
      return;
    }

    setGuestNames((current) => [...current, name]);
    setGuestName('');
  };

  const startEditing = (invitation: AdminInvitationDetail) => {
    setEditGroupName(invitation.group_name);
    setEditContactPhone(invitation.contact_phone ?? '');
    setEditLocale(invitation.locale === 'ca' ? 'ca' : 'es');
    setEditGuests(invitation.guests.map((guest) => ({ full_name: guest.full_name, id: guest.id })));
    setEditGuestName('');
    setEditingInvitation(invitation);
    setIsEditOpen(true);
  };

  const openEditInvitation = async (invitationId: string) => {
    const invitation = await getAdminInvitation(invitationId);
    if (!invitation) {
      return;
    }

    setDetail(null);
    startEditing(invitation);
  };

  const addEditableGuest = () => {
    const name = editGuestName.trim();
    if (!name) {
      return;
    }

    setEditGuests((current) => [...current, { full_name: name }]);
    setEditGuestName('');
  };

  const saveChanges = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!editingInvitation) {
      return;
    }

    if (
      editGuests.length < editingInvitation.guests.length &&
      !window.confirm(adminCopy.editWarning)
    ) {
      return;
    }

    setIsCreating(true);
    const hasUpdated = await updateAdminInvitation({
      contactPhone: editContactPhone,
      groupName: editGroupName,
      guests: editGuests,
      invitationId: editingInvitation.id,
      locale: editLocale,
    });
    setIsCreating(false);

    if (!hasUpdated) {
      return;
    }

    setIsEditOpen(false);
    setEditingInvitation(null);
    await onRefresh();
  };

  return (
    <>
      <Header>
        <div>
          <h1>{adminCopy.title}</h1>
        </div>
        <AccountActions>
          <p>{email}</p>
          <LogoutButton onClick={() => void onSignOut()} type="button">
            {adminCopy.logout}
          </LogoutButton>
        </AccountActions>
      </Header>

      <Summary>
        {metrics.map((metric) => (
          <Metric key={metric.label}>
            <span>{metric.label}</span>
            <strong>{metric.value}</strong>
          </Metric>
        ))}
      </Summary>

      <TableSection>
        <TableActions>
          <SecondaryAction onClick={() => void exportCsv()} type="button">
            <Download aria-hidden="true" size={16} />
            {adminCopy.exportCsv}
          </SecondaryAction>
          <ActionButton onClick={() => setIsCreateOpen(true)} type="button">
            <Plus aria-hidden="true" size={16} />
            {adminCopy.createInvitation}
          </ActionButton>
        </TableActions>
        {overview.invitations.length === 0 ? (
          <p>{adminCopy.empty}</p>
        ) : (
          <TableScroll>
            <Table>
              <thead>
                <tr>
                  <th>{adminCopy.group}</th>
                  <th>{adminCopy.guests}</th>
                  <th>{adminCopy.invitationSent}</th>
                  <th>{adminCopy.submitted}</th>
                  <th>{adminCopy.updated}</th>
                  <th>{adminCopy.actions}</th>
                </tr>
              </thead>
              <tbody>
                {overview.invitations.map((invitation) => {
                  const isExpanded = expandedInvitation?.id === invitation.id;

                  return (
                    <Fragment key={invitation.id}>
                      <tr>
                        <td>
                          <GroupCell>
                            <RowToggle
                              aria-expanded={isExpanded}
                              aria-label={isExpanded ? adminCopy.hideGuests : adminCopy.showGuests}
                              disabled={expandingInvitationId === invitation.id}
                              onClick={() => void toggleGuests(invitation.id)}
                              title={isExpanded ? adminCopy.hideGuests : adminCopy.showGuests}
                              type="button"
                            >
                              <ChevronDown
                                aria-hidden="true"
                                size={18}
                                style={{ transform: isExpanded ? undefined : 'rotate(-90deg)' }}
                              />
                            </RowToggle>
                            <OpenButton
                              onClick={() => void selectInvitation(invitation.id)}
                              type="button"
                            >
                              {invitation.group_name}
                            </OpenButton>
                          </GroupCell>
                        </td>
                        <td>{invitation.guest_count}</td>
                        <td>
                          <SentCheckbox
                            aria-label={`${adminCopy.invitationSent}: ${invitation.group_name}`}
                            checked={invitation.is_sent}
                            disabled={sendingInvitationId === invitation.id}
                            onChange={(event) =>
                              void toggleInvitationSent(invitation.id, event.target.checked)
                            }
                            type="checkbox"
                          />
                        </td>
                        <td>
                          <Status $submitted={invitation.has_submitted}>
                            {invitation.has_submitted ? adminCopy.submitted : adminCopy.pending}
                          </Status>
                        </td>
                        <td>
                          {new Intl.DateTimeFormat('es-ES').format(new Date(invitation.updated_at))}
                        </td>
                        <td>
                          <IconActions>
                            <IconButton
                              aria-label={adminCopy.editInvitation}
                              onClick={() => void openEditInvitation(invitation.id)}
                              title={adminCopy.editInvitation}
                              type="button"
                            >
                              <Pencil aria-hidden="true" size={16} />
                            </IconButton>
                            <IconButton
                              aria-label={adminCopy.deleteInvitation}
                              onClick={() => void deleteInvitation(invitation.id)}
                              title={adminCopy.deleteInvitation}
                              type="button"
                            >
                              <Trash2 aria-hidden="true" size={16} />
                            </IconButton>
                          </IconActions>
                        </td>
                      </tr>
                      {isExpanded && (
                        <ExpandedRow>
                          <td colSpan={6}>
                            <GuestDetailTable>
                              <thead>
                                <tr>
                                  <th>{adminCopy.guestName}</th>
                                  <th>{adminCopy.attendance}</th>
                                  <th>{adminCopy.dietary}</th>
                                  <th>{adminCopy.allergies}</th>
                                  <th>{adminCopy.observations}</th>
                                </tr>
                              </thead>
                              <tbody>
                                {expandedInvitation.guests.map((guest) => (
                                  <tr key={guest.id}>
                                    <td>{guest.full_name}</td>
                                    <td>
                                      <GuestAttendance $status={guest.attendance}>
                                        {guest.attendance === 'attending' ? (
                                          <Check aria-hidden="true" size={16} />
                                        ) : guest.attendance === 'declined' ? (
                                          <X aria-hidden="true" size={16} />
                                        ) : (
                                          <CircleDashed aria-hidden="true" size={16} />
                                        )}
                                        {attendanceLabels[guest.attendance]}
                                      </GuestAttendance>
                                    </td>
                                    <td>
                                      {guest.dietary_options.join(', ') || adminCopy.noDetails}
                                    </td>
                                    <td>{guest.allergy_details || adminCopy.noDetails}</td>
                                    <td>{guest.notes || adminCopy.noDetails}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </GuestDetailTable>
                          </td>
                        </ExpandedRow>
                      )}
                    </Fragment>
                  );
                })}
              </tbody>
            </Table>
          </TableScroll>
        )}
        {hasDetailError && <p>{adminCopy.detailError}</p>}
      </TableSection>

      {isCreateOpen && (
        <ModalBackdrop
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setIsCreateOpen(false);
            }
          }}
        >
          <Modal aria-modal="true" role="dialog">
            <ModalHeader>
              <h2>{adminCopy.createInvitation}</h2>
              <CloseButton
                aria-label={adminCopy.close}
                onClick={() => setIsCreateOpen(false)}
                type="button"
              >
                <X aria-hidden="true" size={18} />
              </CloseButton>
            </ModalHeader>
            <Form onSubmit={handleCreateInvitation}>
              <label>
                {adminCopy.groupName}
                <input
                  onChange={(event) => setGroupName(event.target.value)}
                  required
                  value={groupName}
                />
              </label>
              <label>
                {adminCopy.contactPhone}
                <input
                  autoComplete="tel"
                  inputMode="tel"
                  onChange={(event) => setContactPhone(event.target.value)}
                  type="tel"
                  value={contactPhone}
                />
              </label>
              <label>
                {adminCopy.invitationLanguage}
                <SelectControl>
                  <select
                    onChange={(event) => setLocale(event.target.value as 'ca' | 'es')}
                    value={locale}
                  >
                    <option value="es">{adminCopy.languageEs}</option>
                    <option value="ca">{adminCopy.languageCa}</option>
                  </select>
                  <ChevronDown aria-hidden="true" />
                </SelectControl>
              </label>
              <GuestSection>
                <h3>{adminCopy.guestNames}</h3>
                {guestNames.length > 0 && (
                  <GuestTags>
                    {guestNames.map((name, index) => (
                      <GuestTag key={`${name}-${index}`}>
                        {name}
                        <button
                          aria-label={`Eliminar ${name}`}
                          onClick={() =>
                            setGuestNames((current) =>
                              current.filter((_, itemIndex) => itemIndex !== index),
                            )
                          }
                          type="button"
                        >
                          <Trash2 aria-hidden="true" size={16} />
                        </button>
                      </GuestTag>
                    ))}
                  </GuestTags>
                )}
                <GuestInputRow>
                  <input
                    aria-label={adminCopy.guestName}
                    onChange={(event) => setGuestName(event.target.value)}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter') {
                        event.preventDefault();
                        addGuest();
                      }
                    }}
                    value={guestName}
                  />
                  <ActionButton disabled={!guestName.trim()} onClick={addGuest} type="button">
                    <Plus aria-hidden="true" size={16} />
                    {adminCopy.addGuest}
                  </ActionButton>
                </GuestInputRow>
              </GuestSection>
              <ActionButton disabled={isCreating || guestNames.length === 0} type="submit">
                {adminCopy.saveInvitation}
              </ActionButton>
            </Form>
          </Modal>
        </ModalBackdrop>
      )}

      {detail && (
        <ModalBackdrop
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setDetail(null);
            }
          }}
        >
          <Modal aria-modal="true" role="dialog">
            <ModalHeader>
              <div>
                <h2>{detail.group_name}</h2>
                <p>{detail.contact_phone || adminCopy.noPhone}</p>
              </div>
              <CloseButton
                aria-label={adminCopy.close}
                onClick={() => setDetail(null)}
                type="button"
              >
                <X aria-hidden="true" size={18} />
              </CloseButton>
            </ModalHeader>
            <ActionButton onClick={() => void copyLink(detail.token)} type="button">
              {copiedToken === detail.token ? (
                <Check aria-hidden="true" size={16} />
              ) : (
                <Copy aria-hidden="true" size={16} />
              )}
              {copiedToken === detail.token ? adminCopy.linkCopied : adminCopy.copyLink}
            </ActionButton>
            <Link href={getInvitationLink(detail.token)} rel="noreferrer" target="_blank">
              {getInvitationLink(detail.token)} <ExternalLink aria-hidden="true" size={15} />
            </Link>
            <h3>{adminCopy.responseDetails}</h3>
            <GuestList>
              {detail.guests.map((guest) => (
                <li key={guest.id}>
                  <strong>{guest.full_name}</strong>
                  <GuestMeta>
                    <dt>{adminCopy.attendance}</dt>
                    <dd>{attendanceLabels[guest.attendance]}</dd>
                    <dt>{adminCopy.dietary}</dt>
                    <dd>{guest.dietary_options.join(', ') || adminCopy.noDetails}</dd>
                    <dt>{adminCopy.allergies}</dt>
                    <dd>{guest.allergy_details || adminCopy.noDetails}</dd>
                    <dt>{adminCopy.observations}</dt>
                    <dd>{guest.notes || adminCopy.noDetails}</dd>
                  </GuestMeta>
                </li>
              ))}
            </GuestList>
          </Modal>
        </ModalBackdrop>
      )}

      {isEditOpen && editingInvitation && (
        <ModalBackdrop
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setIsEditOpen(false);
              setEditingInvitation(null);
            }
          }}
        >
          <Modal aria-modal="true" role="dialog">
            <ModalHeader>
              <h2>{adminCopy.editInvitation}</h2>
              <CloseButton
                aria-label={adminCopy.close}
                onClick={() => {
                  setIsEditOpen(false);
                  setEditingInvitation(null);
                }}
                type="button"
              >
                <X aria-hidden="true" size={18} />
              </CloseButton>
            </ModalHeader>
            <Form onSubmit={saveChanges}>
              <label>
                {adminCopy.groupName}
                <input
                  onChange={(event) => setEditGroupName(event.target.value)}
                  required
                  value={editGroupName}
                />
              </label>
              <label>
                {adminCopy.contactPhone}
                <input
                  autoComplete="tel"
                  inputMode="tel"
                  onChange={(event) => setEditContactPhone(event.target.value)}
                  type="tel"
                  value={editContactPhone}
                />
              </label>
              <label>
                {adminCopy.invitationLanguage}
                <SelectControl>
                  <select
                    onChange={(event) => setEditLocale(event.target.value as 'ca' | 'es')}
                    value={editLocale}
                  >
                    <option value="es">{adminCopy.languageEs}</option>
                    <option value="ca">{adminCopy.languageCa}</option>
                  </select>
                  <ChevronDown aria-hidden="true" />
                </SelectControl>
              </label>
              <GuestSection>
                <h3>{adminCopy.guestNames}</h3>
                <GuestTags>
                  {editGuests.map((guest, index) => (
                    <GuestTag key={guest.id ?? `${guest.full_name}-${index}`}>
                      <input
                        aria-label={adminCopy.guestName}
                        onChange={(event) =>
                          setEditGuests((current) =>
                            current.map((item, itemIndex) =>
                              itemIndex === index
                                ? { ...item, full_name: event.target.value }
                                : item,
                            ),
                          )
                        }
                        value={guest.full_name}
                      />
                      <button
                        aria-label={`Eliminar ${guest.full_name}`}
                        onClick={() =>
                          setEditGuests((current) =>
                            current.filter((_, itemIndex) => itemIndex !== index),
                          )
                        }
                        type="button"
                      >
                        <Trash2 aria-hidden="true" size={16} />
                      </button>
                    </GuestTag>
                  ))}
                </GuestTags>
                <GuestInputRow>
                  <input
                    aria-label={adminCopy.guestName}
                    onChange={(event) => setEditGuestName(event.target.value)}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter') {
                        event.preventDefault();
                        addEditableGuest();
                      }
                    }}
                    value={editGuestName}
                  />
                  <ActionButton
                    disabled={!editGuestName.trim()}
                    onClick={addEditableGuest}
                    type="button"
                  >
                    <Plus aria-hidden="true" size={16} />
                    {adminCopy.addGuest}
                  </ActionButton>
                </GuestInputRow>
              </GuestSection>
              <ActionButton disabled={isCreating || editGuests.length === 0} type="submit">
                {adminCopy.saveChanges}
              </ActionButton>
            </Form>
          </Modal>
        </ModalBackdrop>
      )}
    </>
  );
}
