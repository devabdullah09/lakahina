import { Experience } from '../types'
import { getR2Url } from '../config/r2-assets'

// Landing images - using standard path pattern (matching other working images)
const experienceHouseLanding = getR2Url('experiences/3. Experience House, Marrakech/gallery/XH 5 Morocco-149.jpg')
const nobuLanding = getR2Url('experiences/2. Nobu Grand Opening, Marrakech/gallery/L1130283.jpg')
const laKahina2023Landing = getR2Url('experiences/1. La Kahina, 2023/gallery/DSC07088.jpg')
const laKahina2024Landing = getR2Url('experiences/4. La Kahina, 2024/gallery/PHOTO-2024-06-03-16-00-16(1).jpg')
const laKahina2025Landing = getR2Url('experiences/5. La Kahina, 2025/gallery/97-DSCF8932.jpg')
// 2026 uses a different image from 2025 gallery
const laKahina2026Landing = getR2Url('experiences/5. La Kahina, 2025/gallery/277-DSCF9253.jpg')

// La Kahina 2024 Images (keeping for gallery)
const laKahinaImg1 = getR2Url('7. La Kahina 24/Photography/PHOTO-2024-06-03-15-59-57.jpg')
const laKahinaImg2 = getR2Url('7. La Kahina 24/Photography/PHOTO-2024-06-03-16-00-02.jpg')
const laKahinaImg3 = getR2Url('7. La Kahina 24/Photography/PHOTO-2024-06-03-16-00-10.jpg')
const laKahinaImg4 = getR2Url('7. La Kahina 24/Photography/PHOTO-2024-06-03-16-00-15.jpg')
const laKahinaBottom = getR2Url('7. La Kahina 24/Photography/PHOTO-2024-06-04-09-46-50.jpg')
const laKahinaVideo = getR2Url('7. La Kahina 24/KAHINA_16_9_1.mp4', false, true)

// Nobu Grand Opening Images - Section images
const nobuSection1Img = getR2Url('experiences/2. Nobu Grand Opening, Marrakech/gallery/L1130283.jpg')
const nobuSection2Img = getR2Url('experiences/2. Nobu Grand Opening, Marrakech/gallery/L1130285.jpg')
// Video - from Nobu Grand Opening experience folder
const nobuVideo = getR2Url('experiences/2. Nobu Grand Opening, Marrakech/Event Bedouin(Nobu).mp4', false, true)

// La Kahina 2023 Images - Section images
const laKahina2023Section1Img = getR2Url('experiences/1. La Kahina, 2023/gallery/DSC07088.jpg')
const laKahina2023Section2Img = getR2Url('experiences/1. La Kahina, 2023/gallery/DSC07059.JPG')
// Video - full path as in R2; fallback = standard path
const laKahina2023Video = getR2Url('assets/lakahina/experiences/1. La Kahina, 2023/saharartcamp v4.mp4', true, true)
const laKahina2023VideoFallback = getR2Url('experiences/1. La Kahina, 2023/saharartcamp v4.mp4', false, true)

// La Kahina 2024 Images - Section images
const laKahina2024Section1Img = getR2Url('experiences/4. La Kahina, 2024/gallery/PHOTO-2024-06-03-15-59-57.jpg')
const laKahina2024Section2Img = getR2Url('experiences/4. La Kahina, 2024/gallery/PHOTO-2024-06-03-16-00-02.jpg')
const laKahina2024Section3Img = getR2Url('experiences/4. La Kahina, 2024/gallery/PHOTO-2024-06-03-16-00-10.jpg')
// Video - full path as in R2; fallback = standard path
const laKahina2024Video = getR2Url('assets/lakahina/experiences/4. La Kahina, 2024/KAHINA_16_9_1 (1).mp4', true, true)
const laKahina2024VideoFallback = getR2Url('experiences/4. La Kahina, 2024/KAHINA_16_9_1 (1).mp4', false, true)

// La Kahina 2025 Images - Section images (5 sections)
const laKahina2025Section1Img = getR2Url('experiences/5. La Kahina, 2025/gallery/97-DSCF8932.jpg')
const laKahina2025Section2Img = getR2Url('experiences/5. La Kahina, 2025/gallery/102-DSCF8939.jpg')
const laKahina2025Section3Img = getR2Url('experiences/5. La Kahina, 2025/gallery/15-DSCF8824.jpg')
const laKahina2025Section4Img = getR2Url('experiences/5. La Kahina, 2025/gallery/187-DSCF9108.jpg')
const laKahina2025Section5Img = getR2Url('experiences/5. La Kahina, 2025/gallery/277-DSCF9253.jpg')

// Nobu Grand Opening Gallery Images
const nobuGallery = [
  getR2Url('experiences/2. Nobu Grand Opening, Marrakech/gallery/L1130283.jpg'),
  getR2Url('experiences/2. Nobu Grand Opening, Marrakech/gallery/L1130285.jpg'),
  getR2Url('experiences/2. Nobu Grand Opening, Marrakech/gallery/L1130289.jpg'),
  getR2Url('experiences/2. Nobu Grand Opening, Marrakech/gallery/L1130294.jpg'),
  getR2Url('experiences/2. Nobu Grand Opening, Marrakech/gallery/L1130301.jpg'),
  getR2Url('experiences/2. Nobu Grand Opening, Marrakech/gallery/L1130318.jpg'),
  getR2Url('experiences/2. Nobu Grand Opening, Marrakech/gallery/L1130322.jpg'),
  getR2Url('experiences/2. Nobu Grand Opening, Marrakech/gallery/L1130331.jpg'),
  getR2Url('experiences/2. Nobu Grand Opening, Marrakech/gallery/L1130332.jpg'),
  getR2Url('experiences/2. Nobu Grand Opening, Marrakech/gallery/L1130337.jpg'),
  getR2Url('experiences/2. Nobu Grand Opening, Marrakech/gallery/L1130341.jpg'),
  getR2Url('experiences/2. Nobu Grand Opening, Marrakech/gallery/L1130347.jpg'),
  getR2Url('experiences/2. Nobu Grand Opening, Marrakech/gallery/L1130353.jpg'),
  getR2Url('experiences/2. Nobu Grand Opening, Marrakech/gallery/L1130358.jpg'),
  getR2Url('experiences/2. Nobu Grand Opening, Marrakech/gallery/L1130360.jpg'),
  getR2Url('experiences/2. Nobu Grand Opening, Marrakech/gallery/L1130362.jpg'),
  getR2Url('experiences/2. Nobu Grand Opening, Marrakech/gallery/L1130367.jpg'),
  getR2Url('experiences/2. Nobu Grand Opening, Marrakech/gallery/L1130369.jpg'),
  getR2Url('experiences/2. Nobu Grand Opening, Marrakech/gallery/L1130380.jpg'),
  getR2Url('experiences/2. Nobu Grand Opening, Marrakech/gallery/L1130410.jpg'),
  getR2Url('experiences/2. Nobu Grand Opening, Marrakech/gallery/L1130411.jpg'),
  getR2Url('experiences/2. Nobu Grand Opening, Marrakech/gallery/L1130418.jpg'),
  getR2Url('experiences/2. Nobu Grand Opening, Marrakech/gallery/L1130440.jpg'),
  getR2Url('experiences/2. Nobu Grand Opening, Marrakech/gallery/L1130449.jpg'),
  getR2Url('experiences/2. Nobu Grand Opening, Marrakech/gallery/L1130465.jpg'),
  getR2Url('experiences/2. Nobu Grand Opening, Marrakech/gallery/L1130474.jpg'),
  getR2Url('experiences/2. Nobu Grand Opening, Marrakech/gallery/L1130502.jpg'),
  getR2Url('experiences/2. Nobu Grand Opening, Marrakech/gallery/L1130507.jpg'),
  getR2Url('experiences/2. Nobu Grand Opening, Marrakech/gallery/L1130509.jpg'),
  getR2Url('experiences/2. Nobu Grand Opening, Marrakech/gallery/L1130517.jpg'),
  getR2Url('experiences/2. Nobu Grand Opening, Marrakech/gallery/L1130532.jpg'),
  getR2Url('experiences/2. Nobu Grand Opening, Marrakech/gallery/L1130563.jpg'),
  getR2Url('experiences/2. Nobu Grand Opening, Marrakech/gallery/L1130576.jpg'),
  getR2Url('experiences/2. Nobu Grand Opening, Marrakech/gallery/L1130619.jpg'),
  getR2Url('experiences/2. Nobu Grand Opening, Marrakech/gallery/L1130624.jpg'),
  getR2Url('experiences/2. Nobu Grand Opening, Marrakech/gallery/L1130641.jpg'),
  getR2Url('experiences/2. Nobu Grand Opening, Marrakech/gallery/L1130681.jpg'),
  getR2Url('experiences/2. Nobu Grand Opening, Marrakech/gallery/L1130697.jpg'),
  getR2Url('experiences/2. Nobu Grand Opening, Marrakech/gallery/L1130707.jpg'),
  getR2Url('experiences/2. Nobu Grand Opening, Marrakech/gallery/L1130752.jpg'),
]

// La Kahina 2023 Gallery Images
const laKahina2023Gallery = [
  getR2Url('experiences/1. La Kahina, 2023/gallery/088A2535.jpg'),
  getR2Url('experiences/1. La Kahina, 2023/gallery/DSC06617.jpg'),
  getR2Url('experiences/1. La Kahina, 2023/gallery/DSC07059.JPG'),
  getR2Url('experiences/1. La Kahina, 2023/gallery/DSC07088.jpg'),
  getR2Url('experiences/1. La Kahina, 2023/gallery/DSC07643.JPG'),
  getR2Url('experiences/1. La Kahina, 2023/gallery/DSC07690.jpg'),
  getR2Url('experiences/1. La Kahina, 2023/gallery/DSC07820.jpg'),
  getR2Url('experiences/1. La Kahina, 2023/gallery/DSC07947.JPG'),
  getR2Url('experiences/1. La Kahina, 2023/gallery/DSC07952.JPG'),
  getR2Url('experiences/1. La Kahina, 2023/gallery/9E2BC0A6-0E01-4884-93D6-2D281130962C.JPG'),
]

// La Kahina 2024 Gallery Images
const laKahina2024Gallery = [
  getR2Url('experiences/4. La Kahina, 2024/gallery/PHOTO-2024-06-03-15-59-57.jpg'),
  getR2Url('experiences/4. La Kahina, 2024/gallery/PHOTO-2024-06-03-15-59-59.jpg'),
  getR2Url('experiences/4. La Kahina, 2024/gallery/PHOTO-2024-06-03-16-00-00(1).jpg'),
  getR2Url('experiences/4. La Kahina, 2024/gallery/PHOTO-2024-06-03-16-00-00.jpg'),
  getR2Url('experiences/4. La Kahina, 2024/gallery/PHOTO-2024-06-03-16-00-01.jpg'),
  getR2Url('experiences/4. La Kahina, 2024/gallery/PHOTO-2024-06-03-16-00-02(1).jpg'),
  getR2Url('experiences/4. La Kahina, 2024/gallery/PHOTO-2024-06-03-16-00-02.jpg'),
  getR2Url('experiences/4. La Kahina, 2024/gallery/PHOTO-2024-06-03-16-00-03(1).jpg'),
  getR2Url('experiences/4. La Kahina, 2024/gallery/PHOTO-2024-06-03-16-00-04(1).jpg'),
  getR2Url('experiences/4. La Kahina, 2024/gallery/PHOTO-2024-06-03-16-00-04.jpg'),
  getR2Url('experiences/4. La Kahina, 2024/gallery/PHOTO-2024-06-03-16-00-05(1).jpg'),
  getR2Url('experiences/4. La Kahina, 2024/gallery/PHOTO-2024-06-03-16-00-05.jpg'),
  getR2Url('experiences/4. La Kahina, 2024/gallery/PHOTO-2024-06-03-16-00-06(1).jpg'),
  getR2Url('experiences/4. La Kahina, 2024/gallery/PHOTO-2024-06-03-16-00-06.jpg'),
  getR2Url('experiences/4. La Kahina, 2024/gallery/PHOTO-2024-06-03-16-00-07(1).jpg'),
  getR2Url('experiences/4. La Kahina, 2024/gallery/PHOTO-2024-06-03-16-00-07.jpg'),
  getR2Url('experiences/4. La Kahina, 2024/gallery/PHOTO-2024-06-03-16-00-08.jpg'),
  getR2Url('experiences/4. La Kahina, 2024/gallery/PHOTO-2024-06-03-16-00-09(1).jpg'),
  getR2Url('experiences/4. La Kahina, 2024/gallery/PHOTO-2024-06-03-16-00-10.jpg'),
  getR2Url('experiences/4. La Kahina, 2024/gallery/PHOTO-2024-06-03-16-00-11.jpg'),
  getR2Url('experiences/4. La Kahina, 2024/gallery/PHOTO-2024-06-03-16-00-12(1).jpg'),
  getR2Url('experiences/4. La Kahina, 2024/gallery/PHOTO-2024-06-03-16-00-12.jpg'),
  getR2Url('experiences/4. La Kahina, 2024/gallery/PHOTO-2024-06-03-16-00-13(1).jpg'),
  getR2Url('experiences/4. La Kahina, 2024/gallery/PHOTO-2024-06-03-16-00-13.jpg'),
  getR2Url('experiences/4. La Kahina, 2024/gallery/PHOTO-2024-06-03-16-00-14.jpg'),
  getR2Url('experiences/4. La Kahina, 2024/gallery/PHOTO-2024-06-03-16-00-15(1).jpg'),
  getR2Url('experiences/4. La Kahina, 2024/gallery/PHOTO-2024-06-03-16-00-15.jpg'),
  getR2Url('experiences/4. La Kahina, 2024/gallery/PHOTO-2024-06-03-16-00-16(1).jpg'),
  getR2Url('experiences/4. La Kahina, 2024/gallery/PHOTO-2024-06-03-16-00-16.jpg'),
  getR2Url('experiences/4. La Kahina, 2024/gallery/PHOTO-2024-06-03-16-00-17(1).jpg'),
  getR2Url('experiences/4. La Kahina, 2024/gallery/PHOTO-2024-06-03-16-00-19.jpg'),
  getR2Url('experiences/4. La Kahina, 2024/gallery/PHOTO-2024-06-03-16-00-20(1).jpg'),
  getR2Url('experiences/4. La Kahina, 2024/gallery/PHOTO-2024-06-03-16-00-20.jpg'),
  getR2Url('experiences/4. La Kahina, 2024/gallery/PHOTO-2024-06-03-16-00-21(2).jpg'),
  getR2Url('experiences/4. La Kahina, 2024/gallery/PHOTO-2024-06-03-16-00-21.jpg'),
  getR2Url('experiences/4. La Kahina, 2024/gallery/PHOTO-2024-06-03-16-00-22(1).jpg'),
  getR2Url('experiences/4. La Kahina, 2024/gallery/PHOTO-2024-06-03-16-00-23.jpg'),
  getR2Url('experiences/4. La Kahina, 2024/gallery/PHOTO-2024-06-03-16-00-25(1).jpg'),
  getR2Url('experiences/4. La Kahina, 2024/gallery/PHOTO-2024-06-03-16-00-25.jpg'),
  getR2Url('experiences/4. La Kahina, 2024/gallery/PHOTO-2024-06-04-09-46-42.jpg'),
  getR2Url('experiences/4. La Kahina, 2024/gallery/PHOTO-2024-06-04-09-46-44.jpg'),
  getR2Url('experiences/4. La Kahina, 2024/gallery/PHOTO-2024-06-04-09-46-49.jpg'),
  getR2Url('experiences/4. La Kahina, 2024/gallery/PHOTO-2024-06-04-09-46-50.jpg'),
  getR2Url('experiences/4. La Kahina, 2024/gallery/PHOTO-2024-06-04-09-46-53.jpg'),
  getR2Url('experiences/4. La Kahina, 2024/gallery/sequence.12_07_38_12.Still124.jpg'),
]

// La Kahina 2025 Gallery Images
const laKahina2025Gallery = [
  getR2Url('experiences/5. La Kahina, 2025/gallery/2-DSCF8808.jpg'),
  getR2Url('experiences/5. La Kahina, 2025/gallery/4-DSCF8810.jpg'),
  getR2Url('experiences/5. La Kahina, 2025/gallery/15-DSCF8824.jpg'),
  getR2Url('experiences/5. La Kahina, 2025/gallery/31-DSCF8853.jpg'),
  getR2Url('experiences/5. La Kahina, 2025/gallery/45-DSCF8871.jpg'),
  getR2Url('experiences/5. La Kahina, 2025/gallery/57-DSCF8887.jpg'),
  getR2Url('experiences/5. La Kahina, 2025/gallery/60-DSCF8890.jpg'),
  getR2Url('experiences/5. La Kahina, 2025/gallery/61-DSCF8891.jpg'),
  getR2Url('experiences/5. La Kahina, 2025/gallery/62-DSCF8892.jpg'),
  getR2Url('experiences/5. La Kahina, 2025/gallery/67-DSCF8898.jpg'),
  getR2Url('experiences/5. La Kahina, 2025/gallery/70-DSCF8901.jpg'),
  getR2Url('experiences/5. La Kahina, 2025/gallery/77-DSCF8909.jpg'),
  getR2Url('experiences/5. La Kahina, 2025/gallery/79-DSCF8912.jpg'),
  getR2Url('experiences/5. La Kahina, 2025/gallery/80-DSCF8913.jpg'),
  getR2Url('experiences/5. La Kahina, 2025/gallery/82-DSCF8915.jpg'),
  getR2Url('experiences/5. La Kahina, 2025/gallery/83-DSCF8916.jpg'),
  getR2Url('experiences/5. La Kahina, 2025/gallery/85-DSCF8918.jpg'),
  getR2Url('experiences/5. La Kahina, 2025/gallery/92-DSCF8927.jpg'),
  getR2Url('experiences/5. La Kahina, 2025/gallery/93-DSCF8928.jpg'),
  getR2Url('experiences/5. La Kahina, 2025/gallery/94-DSCF8929.jpg'),
  getR2Url('experiences/5. La Kahina, 2025/gallery/97-DSCF8932.jpg'),
  getR2Url('experiences/5. La Kahina, 2025/gallery/99-DSCF8936.jpg'),
  getR2Url('experiences/5. La Kahina, 2025/gallery/102-DSCF8939.jpg'),
  getR2Url('experiences/5. La Kahina, 2025/gallery/105-DSCF8942.jpg'),
  getR2Url('experiences/5. La Kahina, 2025/gallery/106-DSCF8943.jpg'),
  getR2Url('experiences/5. La Kahina, 2025/gallery/107-DSCF8944.jpg'),
  getR2Url('experiences/5. La Kahina, 2025/gallery/111-DSCF8955.jpg'),
  getR2Url('experiences/5. La Kahina, 2025/gallery/121-DSCF8976.jpg'),
  getR2Url('experiences/5. La Kahina, 2025/gallery/142-DSCF9016.jpg'),
  getR2Url('experiences/5. La Kahina, 2025/gallery/155-DSCF9042.jpg'),
  getR2Url('experiences/5. La Kahina, 2025/gallery/159-DSCF9055.jpg'),
  getR2Url('experiences/5. La Kahina, 2025/gallery/160-DSCF9056.jpg'),
  getR2Url('experiences/5. La Kahina, 2025/gallery/161-DSCF9059.jpg'),
  getR2Url('experiences/5. La Kahina, 2025/gallery/162-DSCF9063.jpg'),
  getR2Url('experiences/5. La Kahina, 2025/gallery/178-DSCF9091.jpg'),
  getR2Url('experiences/5. La Kahina, 2025/gallery/184-DSCF9099.jpg'),
  getR2Url('experiences/5. La Kahina, 2025/gallery/187-DSCF9108.jpg'),
  getR2Url('experiences/5. La Kahina, 2025/gallery/193-DSCF9117.jpg'),
  getR2Url('experiences/5. La Kahina, 2025/gallery/203-DSCF9132.jpg'),
  getR2Url('experiences/5. La Kahina, 2025/gallery/204-DSCF9133.jpg'),
  getR2Url('experiences/5. La Kahina, 2025/gallery/213-DSCF9151.jpg'),
  getR2Url('experiences/5. La Kahina, 2025/gallery/241-DSCF9191.jpg'),
  getR2Url('experiences/5. La Kahina, 2025/gallery/242-DSCF9194.jpg'),
  getR2Url('experiences/5. La Kahina, 2025/gallery/269-DSCF9240.jpg'),
  getR2Url('experiences/5. La Kahina, 2025/gallery/277-DSCF9253.jpg'),
  getR2Url('experiences/5. La Kahina, 2025/gallery/278-DSCF9254.jpg'),
  getR2Url('experiences/5. La Kahina, 2025/gallery/301-DSCF9301.jpg'),
  getR2Url('experiences/5. La Kahina, 2025/gallery/303-DSCF9303.jpg'),
  getR2Url('experiences/5. La Kahina, 2025/gallery/304-DSCF9304.jpg'),
  getR2Url('experiences/5. La Kahina, 2025/gallery/312-DSCF9312.jpg'),
  getR2Url('experiences/5. La Kahina, 2025/gallery/472-DSC00579.jpg'),
  getR2Url('experiences/5. La Kahina, 2025/gallery/473-DSC00582.jpg'),
  getR2Url('experiences/5. La Kahina, 2025/gallery/474-DSC00583.jpg'),
  getR2Url('experiences/5. La Kahina, 2025/gallery/477-DSC00586.jpg'),
  getR2Url('experiences/5. La Kahina, 2025/gallery/499-DSC00612.jpg'),
  getR2Url('experiences/5. La Kahina, 2025/gallery/500-DSC00613.jpg'),
  getR2Url('experiences/5. La Kahina, 2025/gallery/519-DSC00642.jpg'),
  getR2Url('experiences/5. La Kahina, 2025/gallery/523-DSC00646.jpg'),
  getR2Url('experiences/5. La Kahina, 2025/gallery/525-DSC00648.jpg'),
  getR2Url('experiences/5. La Kahina, 2025/gallery/545-DSC00683.jpg'),
  getR2Url('experiences/5. La Kahina, 2025/gallery/547-DSC00686.jpg'),
  getR2Url('experiences/5. La Kahina, 2025/gallery/548-DSC00689.jpg'),
  getR2Url('experiences/5. La Kahina, 2025/gallery/628-DSC00955.jpg'),
  getR2Url('experiences/5. La Kahina, 2025/gallery/630-DSC00958.jpg'),
  getR2Url('experiences/5. La Kahina, 2025/gallery/638-DSC00973.jpg'),
  getR2Url('experiences/5. La Kahina, 2025/gallery/640-DSC00978.jpg'),
  getR2Url('experiences/5. La Kahina, 2025/gallery/642-DSC00983.jpg'),
  getR2Url('experiences/5. La Kahina, 2025/gallery/643-DSC00984.jpg'),
  getR2Url('experiences/5. La Kahina, 2025/gallery/652-DSC01008.jpg'),
  getR2Url('experiences/5. La Kahina, 2025/gallery/654-DSC01011.jpg'),
  getR2Url('experiences/5. La Kahina, 2025/gallery/656-DSC01013.jpg'),
  getR2Url('experiences/5. La Kahina, 2025/gallery/657-DSC01014.jpg'),
  getR2Url('experiences/5. La Kahina, 2025/gallery/659-DSC01018.jpg'),
  getR2Url('experiences/5. La Kahina, 2025/gallery/662-DSC01021.jpg'),
  getR2Url('experiences/5. La Kahina, 2025/gallery/665-DSC01026.jpg'),
  getR2Url('experiences/5. La Kahina, 2025/gallery/667-DSC01028.jpg'),
  getR2Url('experiences/5. La Kahina, 2025/gallery/668-DSC01029.jpg'),
]

// Experience House Images - Section images and gallery
const experienceHouseSection1Img = getR2Url('experiences/3. Experience House, Marrakech/gallery/XH 5 Morocco-134.jpg')
const experienceHouseSection2Img1 = getR2Url('experiences/3. Experience House, Marrakech/gallery/XH 5 Morocco-136.jpg')
const experienceHouseSection2Img2 = getR2Url('experiences/3. Experience House, Marrakech/gallery/XH 5 Morocco-138.jpg')
const experienceHouseVideo = getR2Url('OUR EXPERIENCES/5. Experience House, Marrakech/XH x Sahar.mp4', false, true)

// Experience House Gallery Images
const experienceHouseGallery = [
  getR2Url('experiences/3. Experience House, Marrakech/gallery/XH 5 Morocco-134.jpg'),
  getR2Url('experiences/3. Experience House, Marrakech/gallery/XH 5 Morocco-136.jpg'),
  getR2Url('experiences/3. Experience House, Marrakech/gallery/XH 5 Morocco-138.jpg'),
  getR2Url('experiences/3. Experience House, Marrakech/gallery/XH 5 Morocco-139.jpg'),
  getR2Url('experiences/3. Experience House, Marrakech/gallery/XH 5 Morocco-140.jpg'),
  getR2Url('experiences/3. Experience House, Marrakech/gallery/XH 5 Morocco-143.jpg'),
  getR2Url('experiences/3. Experience House, Marrakech/gallery/XH 5 Morocco-145.jpg'),
  getR2Url('experiences/3. Experience House, Marrakech/gallery/XH 5 Morocco-149.jpg'),
  getR2Url('experiences/3. Experience House, Marrakech/gallery/XH 5 Morocco-151.jpg'),
  getR2Url('experiences/3. Experience House, Marrakech/gallery/XH 5 Morocco-155.jpg'),
  getR2Url('experiences/3. Experience House, Marrakech/gallery/XH 5 Morocco-156 (1).jpg'),
  getR2Url('experiences/3. Experience House, Marrakech/gallery/XH 5 Morocco-157 (1).jpg'),
  getR2Url('experiences/3. Experience House, Marrakech/gallery/XH 5 Morocco-161.jpg'),
  getR2Url('experiences/3. Experience House, Marrakech/gallery/XH 5 Morocco-163.jpg'),
  getR2Url('experiences/3. Experience House, Marrakech/gallery/XH 5 Morocco-164.jpg'),
  getR2Url('experiences/3. Experience House, Marrakech/gallery/XH 5 Morocco-167 (1).jpg'),
]

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Experience House Marrakech, 2023',
    slug: 'experience-house-marrakech-2023',
    label: 'EXPERIENCE HOUSE MARRAKECH, 2023',
    description:
      'A unique gathering space where creativity, community, and Moroccan culture converge. Experience House Marrakech is a hub for artists, innovators, and cultural explorers.',
    image: experienceHouseLanding,
    video: experienceHouseVideo,
    images: [experienceHouseSection1Img, experienceHouseSection2Img1, experienceHouseSection2Img2],
    gallery: experienceHouseGallery,
    fullDescription: {
      subtitle: 'Experience House',
      introParagraph: '',
      sections: [
        {
          title: '',
          content: `Type of Project: Designing an intimate Lila during the holy mouth of Ramadan with a sufi experience. Artists: The Hamadchas / Victorien Joy
Location: Private villa, Marrakech
Dates: March 23, 2023
Duration: 1 night`,
        },
        {
          title: 'Description',
          content: `In the midst of the Experience House, a community of designers, entrepreneurs, and mindful souls, we extended a heartfelt invitation to 40 individuals seeking a profound cultural encounter. Guided by the revered Hamadchas of Morocco, recognized as a UNESCO cultural heritage, we embarked on an evening of spiritual resonance and culinary mastery.
Our guests delved into the heart of Moroccan culture as they engaged in a hands-on cooking experience with the Dadas of the house, nurturing a connection to traditions passed down through generations. Together, we savored a sumptuous homemade Moroccan ftour, celebrating the rich flavors of the region.
The highlight of the evening came as the Hamadchas shared a glimpse of a lila, an exquisite spiritual ceremony, allowing our guests to embark on a transcendental journey within themselves. The deep and soulful Sufi experience provided a unique opportunity to connect with their innermost selves.
As the night unfolded, we immersed ourselves in a cross-cultural fusion of music, masterfully blending electronic and Sufi Moroccan melodies. Victorien Joy and the Hamadcha ensemble created a sonic landscape that transcended boundaries, forging a connection between diverse musical worlds.
This exceptional evening celebrated not only cultural heritage but also the shared human experience, uniting diverse souls in a tapestry of harmony and connection that will be cherished for a lifetime.`,
        },
      ],
    },
  },
  {
    id: '2',
    title: 'Nobu Grand Opening Marrakech, 2023',
    slug: 'nobu-grand-opening-marrakech-2023',
    label: 'NOBU GRAND OPENING MARRAKECH, 2023',
    description:
      'An unforgettable evening celebrating the grand opening of Nobu Marrakech. A fusion of Japanese elegance and Moroccan hospitality set in a stunning desert landscape.',
    image: nobuLanding,
    video: nobuVideo,
    images: [nobuSection1Img, nobuSection2Img],
    gallery: nobuGallery,
    fullDescription: {
      subtitle: 'Sunset experience',
      introParagraph: '',
      sections: [
        {
          title: '',
          content: `Type of Project: Designing the closing party for the famous hotel group Nobu, who opened his doors in Marrakech, Morocco officially in May 2023.
Artists: Camilo Franco / Nada / Lemurian / Santiago Bartolomé / Blitoni by Abel Production
Location: Bedouin, Agafay, Marrakech
Dates: May 28, 2023
Duration: One night`,
        },
        {
          title: 'Description',
          content: `In the mesmerizing expanse of Agafay Desert, we designed an exclusive, invitation-only event that marks the grand opening of Nobu Marrakech. With the esteemed presence of Nobu chef and Daniel Shamoon, Nobu Group owner, we've reimagined the desert as a dreamscape, welcoming 80 guests from around the world.
Here, the Bedouin tradition meets a redefined reality.
The night unfolds with a cross-cultural symphony featuring Abel Damoussi and Gnawa Maalam, harmonizing their unique sounds alongside international talents like Lemurian and Santiago Bartolomé.
Moroccan gastronomy reigns supreme in our culinary offerings, celebrating the country's rich heritage, while our mixologist, Simone Mellone, crafts exclusive elixirs using Mahia, a Jewish liquor of Moroccan origin.
A night of transcendence and celebration, where diverse worlds unite in the heart of Agafay.`,
        },
      ],
    },
  },
  {
    id: '3',
    title: 'La Kahina Marrakech, 2023',
    slug: 'la-kahina-marrakech-2023',
    label: 'LA KAHINA MARRAKECH, 2023',
    description:
      'A cross-cultural fundraiser event bringing together over 120 people in Marrakech for an immersive experience celebrating art, authenticity, and Moroccan nomadic culture.',
    image: laKahina2023Landing,
    video: laKahina2023Video,
    videoFallbackUrls: [laKahina2023VideoFallback],
    images: [laKahina2023Section1Img, laKahina2023Section2Img],
    gallery: laKahina2023Gallery,
    fullDescription: {
      subtitle: 'Fundraiser event in Marrakech',
      introParagraph: '',
      sections: [
        {
          title: '',
          content: `Type of Project: Designing an intimate gathering for more than 120 people in Marrakech for a cross-cultural experience.
Artists: Deer Jade / Lemurian / Unders / Zohar / Pascale Caristo / The Hamadchas / Abdellah Ben Charradi / Santiago Bartolomé / Avy Shanty / Blitoni by Abel Production / Nakaloka by Monica Dogra and Victorien Joy
Location: Jnane Tamsna / The Source / La Kasbah d'Agafay
Dates: June 1 to 4, 2023
Duration: 3 days`,
        },
        {
          title: 'Description',
          content: `Our home will became your home.
You understood Morocco from an anthropological aspect
Immersed in art, authenticity and nature. You touched ground to its more profound secrets. 3 days, 3 secret locations, 3 different experiences. All in the heart of Morocco. Connecting yourself into a magical place where art, cuisine, lights and music reflect the beauty of our Nomadic culture.`,
        },
      ],
    },
  },
  {
    id: '4',
    title: 'La Kahina Marrakech, 2024',
    slug: 'la-kahina-marrakech-2024',
    label: 'LA KAHINA MARRAKECH, 2024',
    description:
      'A one-week private event blending Black Rock City\'s ethos with Moroccan culture and local artistry. An immersive cultural experience bringing together 120 participants to celebrate the vibrant traditions of Morocco.',
    image: laKahina2024Landing,
    video: laKahina2024Video,
    videoFallbackUrls: [laKahina2024VideoFallback],
    images: [laKahina2024Section1Img, laKahina2024Section2Img, laKahina2024Section3Img],
    gallery: laKahina2024Gallery,
    fullDescription: {
      subtitle: 'La Kahina: Private Gathering in Marrakech',
      introParagraph: '',
      sections: [
        {
          title: '',
          content: `Type of Project: One-week private event blending Black Rock City's ethos with Moroccan culture and local artistry.
Location: Marrakech and Skoura, Morocco
Dates: May 28th - June 4th
Duration: 1 week

Where the Dust Meets Culture

La Kahina offers an immersive cultural experience, bringing together 120 participants to celebrate the vibrant traditions of Morocco while fostering a global community of creators and explorers. This unique gathering seamlessly merges Moroccan heritage with contemporary artistic expression.`,
        },
        {
          title: 'Event Highlights',
          content: `**1. Opening Night: 120 people (community members only)**
○ **Private Dinner & Mystical Ritual:**
Experience the spiritual rhythms of **Gnawa music** at **The Source** in Marrakech. Led by **Masters of Gnawa**, this ritual unveils the spiritual essence of **Marrakechi culture** in an intimate setting.

**2. Regeneration Day**
○ A tranquil day at **The Source**, offering:
■ **Music and tantric workshops**
■ **Opportunities for relaxation and connection** amid the serene ambiance of Marrakech.

**3. Saturday Night Performances: 400 people**
○ A curated lineup of international and local talent, featuring:
■ **Abdellah Ben Cherradi, Santi Bartolome and Avy Shanty**
■ **International DJs** blending global and Moroccan beats, creating a night of beauty and ecstasy.

**4. Sunday: The Closing Celebration: 120 people (community members only)**
○ **Activities include:**
■ **Poolside brunch and soothing DJ sets**
■ **Yoga workshops with Ola Jas**
■ **Ice baths led by David Boot**
■ **Closing hosted by No Borders for Lovers and Santiago Bartolomé**, uniting poetry and music to bring the event to a soulful close.

5. From Monday to Thursday: Bespoke experience of 3 nights in the desert of Skoura with an immersion in a 500 years old Kasbah. Only 20 people.`,
        },
        {
          title: 'Featured Artists',
          content: `● Share
● Santiago Bartolomé
● Abdellah Ben Charradi
● No Borders for Lovers
● Irenée S
● Cole Knight
● Molinex
● Lemurian
● Maalem Merchan
● Khadija El Warzazia
● Oveous

Concept

La Kahina fosters a unique cross-cultural dialogue, celebrating Moroccan artistry and traditions while uniting participants in a mindful, creative, and collaborative environment. It embodies a fusion of heritage and innovation, making it a transformative experience for all.`,
        },
      ],
    },
  },
  {
    id: '5',
    title: 'La Kahina, Marrakech, 2025',
    slug: 'la-kahina-marrakech-2025',
    label: 'LA KAHINA, MARRAKECH, 2025',
    description:
      'A 4-day immersive cultural gathering blending Burning Man ethos with Moroccan ancestral heritage and contemporary artistic expression.',
    image: laKahina2025Landing,
    video: laKahinaVideo,
    images: [laKahina2025Section1Img, laKahina2025Section2Img, laKahina2025Section3Img, laKahina2025Section4Img, laKahina2025Section5Img],
    gallery: laKahina2025Gallery,
    fullDescription: {
      subtitle: 'La Kahina 2025 – Private Gathering in Marrakech',
      introParagraph: '',
      sections: [
        {
          title: '',
          content: `Type of Project: Immersive cultural gathering blending Burning Man ethos with Moroccan ancestral heritage and contemporary artistic expression
Location: Agafay Desert, Marrakech Medina & Ourika Farm Route, Morocco
Dates: June 13th – June 16th, 2025
Duration: 4 days / 3 nights

Where the Dust Meets Culture

La Kahina 2025 brought together **120 community members** for an intimate and transformative journey across desert, city, and nature. Rooted in Moroccan traditions and elevated by global artistic voices, the gathering unfolded as a living ritual—where music, movement, and shared presence wove a deep sense of belonging and celebration.`,
        },
        {
          title: 'Event Highlights',
          content: `**1. Opening Night – Agafay Desert (Community Only | 120 people)**

**Alkamar Desert Camp – Under the Open Sky**

The journey began beneath the stars of the Agafay desert with a sacred opening night anchored in ancestral sound and ritual.

• **Gnawa Ceremony & Desert Ritual**
Hosted at Alkamar Desert Camp, the night featured powerful performances by **Master Gnawa musicians**, including **Mehdi Qamoum**, **Maalem Merchan**, and **Maalem Bakbou**, guiding the circle through trance, rhythm, and spiritual invocation.

• **L3abatt Women Collective**
A group of women drummers and singers animated the desert night, their voices and percussions echoing through the dunes—honoring feminine power, lineage, and collective joy.

This opening night set the energetic foundation of La Kahina: grounded, mystical, and deeply Moroccan.`,
        },
        {
          title: '',
          content: `**2. Second Night – Marrakech Medina (500 people)**

**From 7 PM to 5 AM – A Night Where Yves Saint Laurent Met Studio 54**

The gathering moved into the heart of Marrakech, transforming a stunning riad into a vibrant, high-energy celebration.

• **Music & Performances**
A carefully curated lineup featuring **Deer Jade**, **Share**, **Molyness**, **Ines Rau**, **Irénée S**, and **N810** carried the night through layered soundscapes—blending electronic rhythms, sensual grooves, and hypnotic melodies.

• **Atmosphere**
An unforgettable party where couture elegance met disco spirit, weaving together the legacy of Marrakech with the freedom of Studio 54. The night flowed effortlessly until sunrise, uniting locals and international guests in pure celebration.`,
        },
        {
          title: '',
          content: `**3. Closing Day – Ourika Farm Route (Community Only | 120 people)**

**Integration, Nature & Collective Grounding**

The final day invited the community into softness and integration, hosted in a serene farm setting along the Ourika route.

• **Farm-to-Table Brunch**
A long, nourishing brunch rooted in local produce and shared presence, reconnecting the group after the intensity of the nights.

• **Wellness & Integration**
○ Tantra and movement classes
○ Somatic exploration and embodied practices
○ Music sessions by **Baba 2 Baba**, **Shanty Avy**, and **Iam Nada**, offering a gentle, soulful soundscape throughout the day

• **Closing Concert**
The gathering concluded with a moving live concert by **Julia Scott**, accompanied by **Bart**, a multi-instrumentalist from Poland—bringing La Kahina 2025 to a tender, poetic close.`,
        },
        {
          title: 'Concept',
          content: `La Kahina 2024 embodied a living bridge between **ancestral Moroccan culture** and **contemporary global expression**. Through ritual, music, movement, and shared experiences, the gathering cultivated a mindful, creative, and collaborative space—where community became ceremony, and celebration became remembrance.

La Kahina is not just an event.
It is a meeting point.
A lineage.
A pulse carried forward.`,
        },
      ],
    },
  },
  {
    id: '6',
    title: 'La Kahina, Marrakech, 2026',
    slug: 'la-kahina-marrakech-2026',
    label: 'LA KAHINA, MARRAKECH, 2026',
    comingSoon: true,
    description:
      'Experience the spirit of the legendary Berber queen through an immersive cultural celebration. La Kahina brings together music, art, and Moroccan heritage in a unique desert gathering.',
    image: laKahina2026Landing,
    images: [laKahinaImg1, laKahinaImg2, laKahinaImg3, laKahinaImg4],
    bottomImage: laKahinaBottom,
    fullDescription: {
      subtitle: 'A Celebration of Moroccan Heritage',
      introParagraph:
        'La Kahina 2026 is an immersive cultural experience celebrating the legendary Berber warrior queen. Through music, art, and authentic Moroccan traditions, we honor the rich heritage of North Africa.',
      sections: [
        {
          title: 'The Legend of La Kahina',
          content: `La Kahina, also known as Dihya, was a 7th-century Berber warrior queen who led indigenous resistance to the Muslim conquest of the Maghreb. Her legacy lives on as a symbol of strength, independence, and cultural pride. This experience pays homage to her spirit through contemporary artistic expression rooted in traditional Moroccan culture.`,
        },
        {
          title: 'Cultural Immersion',
          content: `Immerse yourself in authentic Moroccan traditions through live performances, traditional crafts, and culinary experiences. From the rhythms of Gnawa music to the intricate patterns of Berber textiles, every element celebrates the diverse cultural heritage of Morocco.`,
        },
        {
          title: 'Music & Performance',
          content: `Experience world-class performances featuring traditional and contemporary Moroccan artists. The program includes Gnawa musicians, Amazigh singers, and modern electronic producers who blend ancestral sounds with innovative beats, creating a bridge between past and future.`,
        },
        {
          title: 'Location & Community',
          content: `Set in the stunning landscapes that inspired La Kahina's legacy, this gathering brings together a community of cultural enthusiasts, artists, and seekers. Together, we create a space where tradition meets innovation, and ancient wisdom guides modern expression.`,
        },
      ],
    },
  },
]
