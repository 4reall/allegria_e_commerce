import { GetStaticPropsContext } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Brands = () => {
	const { t } = useTranslation('brands')
	return (
		<section className="vintageBrand relative uppercase px-1 pb-28 mds:px-[15px]">
			<div className="vintageIntroduction text-center text-beige pt-56 relative z-10 space-y-1 font-decor h-[600px] mb-[120px] mds:h-[460px] mds:pt-40 mds:mb-[50px]">
				<div className="vintageIntroductionWrapper">
					<p className="vintageAnnotation text-[25px] xs:text-base">
						{t('brand')}
					</p>
					<h1 className="vintageTitle text-xl mds:text-lg">
						{t('vintageBrand')}
					</h1>
				</div>
				<p className="vintageSubtitle m-auto font-avenir normal-case md:w-[637px] xs:w-50%">
					{t('vintageDescriprion')}
				</p>
			</div>
			<div>
				<img className="vintageBGImage absolute top-0 left-0 object-cover w-full h-[460px] object-top md:h-[600px]" src="/assets/brands/vintageBrand/americanVintageBanner.jpg" alt="vintageBanner" />
			</div>
			<div className="vintageText px-[6%] flex mds:px-[2%] mds:flex-col-reverse">
				<img className="mr-[6%] my-auto mds:w-[260px] lgs:w-[300px] mds:max-h-[230px] mds:mx-auto mds:max-w-[255px]" src="/assets/brands/vintageBrand/americanVintageText.png" alt="woman in white coat" />
				<img className="mx-auto mb-[20%] hidden mds:block" src="/assets/brands/vintageBrand/americanVintageForSmallScreen.png" alt="vintage Woman Sitting for small screens" />
				<div className="vintageTextWrapper my-auto font-avenir text-primary-dark mds:text-center mds:mb-[10%]">
					<h2 className="vintageTextTitle font-extrabold text-[25px] pb-8 mds:text-[20px]">
						{t('vintageBrand')}
						</h2>
					<p className="vintageTextDescription text-[14px] max-w-[627px] mds:mx-auto">
						{t('vintageText')}
						</p>
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
