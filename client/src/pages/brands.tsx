import Typography from "common/components/_base/Typography/Typography";
import { GetStaticPropsContext } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import americanVintageTextPic from '../../public/assets/images/brands/vintageBrand/americanVintageTextPic.png';
import americanVintageForSmallScreen from '../../public/assets/images/brands/vintageBrand/americanVintageForSmallScreen.png';
import vintageUnderTextPic from '../../public/assets/images/brands/vintageBrand/vintageUnderTextPic.png';
import dehaTextPic from '../../public/assets/images/brands/deha/dehaTextPic.png';
import dehaUnderTextPic from '../../public/assets/images/brands/deha/dehaUnderTextPic.png';
import dehaWomanLayingSmallScreen from '../../public/assets/images/brands/deha/dehaWomanLayingSmallScreen.png';
import dehaWomanStandingSmallScreen from '../../public/assets/images/brands/deha/dehaWomanStandingSmallScreen.png';



const Brands = () => {
	const { t } = useTranslation('brands')
	return (
		<main>
			<div className="bg-[url('/assets/images/brands/vintageBrand/americanVintageBanner.jpg')] bg-cover bg-center pt-40 mb-12 relative z-10 space-y-1 h-[460px] uppercase text-center md:pt-56 md:mb-28 md:h-[600px] md:px-1" >
				<div>
					<Typography type="decor" color="beige" className="block">
						{t('brand')}
					</Typography>
					<Typography type="decor" color="beige" className="text-3xl md:text-xl">
						{t('vintageBrand')}
					</Typography>
				</div>
				<Typography type="decor" color="beige" className="m-auto normal-case md:w-[630px] px-2">
					{t('vintageDescriprion')}
				</Typography>
			</div>
			<section className="relative uppercase px-4 pb-28 xl:px-40 ">
				<div className="flex flex-col-reverse  max-w-[1200px] gap-16 px-2 xl:mx-auto md:flex-row md:mb-12">
					<div className="relative m-auto w-64 h-56 shrink-0 xl:h-[350px] xl:w-[400px] ">
						<Image layout="fill" src={americanVintageTextPic} alt="american vintage text pic" />
					</div>
					<div className="mx-auto mb-12 md:hidden">
						<Image width={345} height={345} src={americanVintageForSmallScreen} alt="american vintage for small screen" />
					</div>
					<div className="flex flex-col justify-center mx-auto max-w-[600px] text-center md:text-left">
						<Typography type="decor" variant="lg" color="primaryDark" className="mb-5">
							{t('vintageBrand')}
						</Typography>
						<Typography variant="sm" type="decor" className="">
							{t('vintageText')}
						</Typography>
					</div>
				</div>
				<div className="hidden ml-60% md:block">
					<Image src={vintageUnderTextPic} alt="american vintage under text pic" />
				</div>
			</section>

			<div className="bg-[url('/assets/images/brands/deha/dehaBanner.jpg')] bg-cover bg-center pt-40 mb-12 relative z-10 space-y-1 h-[460px] uppercase text-center md:pt-56 md:mb-28 md:h-[600px] md:px-1" >
				<div>
					<Typography type="decor" color="beige" className="block">
						{t('brand')}
					</Typography>
					<Typography type="decor" color="beige" className="text-3xl md:text-xl">
						{t('dehaBrand')}
					</Typography>
				</div>
				<Typography type="decor" color="beige" className="m-auto normal-case md:w-[630px] px-2">
					{t('dehaDescriprion')}
				</Typography>
			</div>

			<section className="relative uppercase px-4 pb-28 xl:px-40 ">
				<div className="flex flex-col-reverse  max-w-[1200px] gap-16 px-2 xl:mx-auto md:flex-row md:mb-12">
					<div className="flex flex-col justify-center mb-20 mx-auto max-w-[600px] md:text-left md:mb-0">
						<Typography type="decor" variant="lg" color="primaryDark" className="mb-5">
							{t('dehaBrand')}
						</Typography>
						<Typography variant="sm" type="decor" className="">
							{t('dehaText')}
						</Typography>
					</div>
					<div className="relative m-auto w-64 h-56 shrink-0 hidden xl:h-[350px] xl:w-[400px] md:block">
						<Image layout="fill" src={dehaTextPic} alt="Deha text pic" />
					</div>
				</div>
				<div className="hidden ml-[15%] md:block">
					<Image src={dehaUnderTextPic} alt="Deha under text pic" />
				</div>
				<div className="mx-auto w-fit mb-12 md:hidden">
					<Image width={280} height={280} src={dehaWomanLayingSmallScreen} alt="Deha woman laying small screen" />
				</div>
				<div className="mx-auto w-fit md:hidden">
					<Image width={195} height={195} src={dehaWomanStandingSmallScreen} alt="Deha woman standing small screen" />
				</div>
			</section>

			<div className="text-center">
				<Typography type="decor" color="primaryDark" className="block">
					{t('brand')}
				</Typography>
				<Typography type="decor" color="primaryDark" className="text-3xl md:text-xl">
					{t('vintageBrand')}
				</Typography>
			</div>
			<Typography type="decor" color="primaryDark" className="m-auto normal-case md:w-[630px] px-2">
				{t('vintageDescriprion')}
			</Typography>
		</main>
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
