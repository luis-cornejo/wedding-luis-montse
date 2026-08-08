import type { Copy } from '../../../../application/types';
import {
  Eyebrow,
  SectionContainer,
  SectionIntro,
  SectionText,
  SectionTitle,
} from '../../../../common/components/ui';

import { Grid, Large, Quote, Tall, Wide } from './GallerySection.styled';

type Props = {
  gallery: Copy['gallery'];
};

export default function GallerySection({ gallery }: Props) {
  return (
    <SectionContainer id="atmosfera">
      <SectionIntro>
        <Eyebrow>{gallery.eyebrow}</Eyebrow>
        <SectionTitle>{gallery.title}</SectionTitle>
        <SectionText>{gallery.body}</SectionText>
      </SectionIntro>

      <Grid>
        <Large>
          <img src="/images/jardin.png" alt="Ceremonia en el jardín" />
        </Large>
        <Tall>
          <img src="/images/masia.png" alt="Exterior de la masía" />
        </Tall>
        <Quote>
          <p>{gallery.quote}</p>
        </Quote>
        <Wide>
          <img
            src="/images/ceremonia-interior-ilustrada.png"
            alt="Ilustración del espacio interior para la ceremonia"
          />
        </Wide>
      </Grid>
    </SectionContainer>
  );
}
