import Typography from "common/components/_base/Typography/Typography";
import { GetStaticPropsContext } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Brands = () => {
	const { t } = useTranslation('brands')
	return (
		<section className="vintageBrand relative uppercase px-1 pb-28 mds:px-[15px]">
			<div className="vintageIntroduction text-center pt-56 relative z-10 space-y-1 h-[600px] mb-[120px] mds:h-[460px] mds:pt-40 mds:mb-[50px]">
				<div className="vintageIntroductionWrapper">
					<Typography type="decor" variant="md" color="beige" className="vintageAnnotation block xs:text-base">
						{t('brand')}
					</Typography>
					<Typography type="decor" variant="xl" color="beige" className="vintageTitle mds:text-lg">
						{t('vintageBrand')}
					</Typography>
				</div>
				<Typography type="avenir" variant="md" color="beige" className="vintageSubtitle m-auto normal-case md:w-[637px] xs:w-50%">
					{t('vintageDescriprion')}
				</Typography>
			</div>
			<div>
				<img className="vintageBGImage absolute top-0 left-0 object-cover w-full h-[460px] object-top md:h-[600px]" src="/assets/brands/vintageBrand/americanVintageBanner.jpg" alt="vintageBanner" />
			</div>
			<div className="vintageText px-[6%] flex mds:px-[2%] mds:flex-col-reverse">
				<img className="mr-[6%] my-auto mds:w-[260px] lgs:w-[300px] mds:max-h-[230px] mds:mx-auto mds:max-w-[255px]" src="/assets/brands/vintageBrand/americanVintageText.png" alt="woman in white coat" />
				<img className="mx-auto mb-[20%] hidden mds:block" src="/assets/brands/vintageBrand/americanVintageForSmallScreen.png" alt="vintage Woman Sitting for small screens" />
				<div className="vintageTextWrapper my-auto font-avenir text-primary-dark mds:text-center mds:mb-[10%]">
					<Typography type="avenir" variant="lg" color="primaryDark" className="vintageTextTitle block font-extrabold pb-8 mds:text-[20px]">
						{t('vintageBrand')}
						</Typography>
					<Typography variant="sm" type="avenir" className="vintageTextDescription max-w-[627px] mds:mx-auto">
						{t('vintageText')}
						</Typography>
				</div>
			</div>
			<img className="ml-[55%] mt-10 mds:hidden" src="/assets/brands/vintageBrand/americanVintageFooterPic.png" alt="vintage Woman Sitting Footer" />
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
