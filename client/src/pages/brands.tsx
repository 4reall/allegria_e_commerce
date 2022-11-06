import Typography from "common/components/_base/Typography/Typography";
import { GetStaticPropsContext } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';

const Brands = () => {
	const { t } = useTranslation('brands')
	return (
		<section className="vintageBrand relative uppercase px-1 pb-28 mds:px-4">
			<div className="vintageIntroduction text-center pt-56 relative z-10 space-y-1 h-[600px] mb-28 mds:h-[460px] mds:pt-40 mds:mb-12">
				<div className="vintageIntroductionWrapper">
					<Typography type="decor" variant="md" color="gray" className="vintageAnnotation block xs:text-base">
						{t('brand')}
					</Typography>
					<Typography type="decor" variant="xl" color="gray" className="vintageTitle mds:text-lg">
						{t('vintageBrand')}
					</Typography>
				</div>
				<Typography type="decor" variant="md" color="gray" className="vintageSubtitle m-auto normal-case md:w-[637px] xs:w-50%">
					{t('vintageDescriprion')}
				</Typography>
			</div>
			<div>
				<img className="vintageBGImage absolute top-0 left-0 object-cover w-full h-[460px] object-top md:h-[600px]" src="/assets/images/brands/vintageBrand/americanVintageBanner.jpg" alt="vintage banner background" />
			</div>
			<div className="vintageText px-6% flex mds:px-2% mds:flex-col-reverse">
				<Image width={300} height={300} className="mr-6% my-auto mds:w-64 lgs:w-[300px] mds:max-h-56 mds:mx-auto mds:max-w-64" src="/assets/images/brands/vintageBrand/americanVintageText.png" alt="woman in white coat" />
				<img className="mx-auto mb-20% hidden mds:block" src="/assets/images/brands/vintageBrand/americanVintageForSmallScreen.png" alt="vintage Woman Sitting for small screens" />
				<div className="vintageTextWrapper my-auto text-primary-dark mds:text-center mds:mb-10%">
					<Typography type="decor" variant="lg" color="primaryDark" className="vintageTextTitle block font-extrabold pb-8 mds:text-[20px]">
						{t('vintageBrand')}
						</Typography>
					<Typography variant="sm" type="decor" className="vintageTextDescription max-w-[627px] mds:mx-auto">
						{t('vintageText')}
						</Typography>
				</div>
			</div>
			<img className="ml-50% mt-10 mds:hidden" src="/assets/images/brands/vintageBrand/americanVintageFooterPic.png" alt="vintage Woman Sitting Footer" />
		</section>
	);
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
	return {
		props: {
			...(await serverSideTranslations(locale || 'ru', ['brands']))
		},
	};
}

export default Brands;
