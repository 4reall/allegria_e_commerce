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
import ginaLucyBanner from '../../public/assets/images/brands/ginaLucy/ginaLucyBanner.jpg';
import ginaLucyTextPic from '../../public/assets/images/brands/ginaLucy/ginaLucyTextPic.png';
import birkenstockBanner from '../../public/assets/images/brands/birkenstock/birkenstockBanner.png';
import birkenstockTextPic from '../../public/assets/images/brands/birkenstock/birkenstockTextPic.png';
import birkenstockUnderTextPic from '../../public/assets/images/brands/birkenstock/birkenstockUnderTextPic.png';



const Brands = () => {
	const { t } = useTranslation('brands')
	return (
		<main>
			<div className="bg-[url('/assets/images/brands/vintageBrand/americanVintageBanner.jpg')] bg-cover bg-center pt-40 mb-12 relative z-10 space-y-1 h-[460px] uppercase text-center md:pt-56 md:mb-28 md:h-[600px] md:px-1" >
				<div className="mx-auto max-w-[630px] space-y-2">
					<Typography type="decor" color="beige" className="block">
						{t('brand')}
					</Typography>
					<Typography type="decor" color="beige" className="text-3xl md:text-xl block">
						{t('vintageBrand')}
					</Typography>
					<Typography type="decor" color="beige" className="m-auto normal-case px-2 block md:w-[630px]">
						{t('vintageDescriprion')}
					</Typography>
				</div>
			</div>
			<section className="relative uppercase px-4 pb-28 xl:px-40 ">
				<div className="flex flex-col-reverse  max-w-[1200px] gap-16 px-2 xl:mx-auto md:flex-row md:mb-12">
					<div className="relative m-auto w-64 h-56 shrink-0 xl:h-80 xl:w-96 ">
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
				<div className="mx-auto max-w-[630px] space-y-2 ">
					<Typography type="decor" color="beige" className="block">
						{t('brand')}
					</Typography>
					<Typography type="decor" color="beige" className="text-3xl md:text-xl block ">
						{t('dehaBrand')}
					</Typography>
					<Typography type="decor" color="beige" className="m-auto normal-case px-2 block md:w-[630px]">
						{t('dehaDescriprion')}
					</Typography>
				</div>
			</div>

			<section className="relative uppercase px-4 pb-20 md:pb-40 xl:px-40 ">
				<div className="flex flex-col-reverse  max-w-[1200px] gap-16 px-2 xl:mx-auto md:flex-row md:mb-12">
					<div className="flex flex-col justify-center mb-20 mx-auto max-w-[600px] md:text-left md:mb-0">
						<Typography type="decor" variant="lg" color="primaryDark" className="mb-5 text-center">
							{t('dehaBrand')}
						</Typography>
						<Typography variant="sm" type="decor" className="text-center">
							{t('dehaText')}
						</Typography>
					</div>
					<div className="relative m-auto w-64 h-56 shrink-0 hidden xl:h-80 xl:w-96 md:block">
						<Image layout="fill" src={dehaTextPic} alt="Deha text pic" />
					</div>
				</div>
				<div className="hidden ml-[18%] md:block">
					<Image src={dehaUnderTextPic} alt="Deha under text pic" />
				</div>
				<div className="mx-auto w-fit mb-12 md:hidden">
					<Image width={280} height={280} src={dehaWomanLayingSmallScreen} alt="Deha woman laying small screen" />
				</div>
				<div className="mx-auto w-fit md:hidden">
					<Image width={195} height={195} src={dehaWomanStandingSmallScreen} alt="Deha woman standing small screen" />
				</div>
			</section>

			<div className="space-y-1 uppercase text-center mb-14 md:mb-28">
				<div className="max-w-[630px] mx-auto mb-12 space-y-2 px-1">
					<Typography type="decor" color="primaryDark" className="block">
						{t('brand')}
					</Typography>
					<Typography type="decor" color="primaryDark" className="text-3xl md:text-xl block">
						{t('ginaLucyBrand')}
					</Typography>
					<Typography type="decor" color="primaryDark" className="m-auto normal-case px-2 block md:w-[630px]">
						{t('ginaLucyDescriprion')}
					</Typography>
				</div>
				<div className="relative h-72 md:h-[600px]">
					<Image layout="fill" className="object-cover" src={ginaLucyBanner} alt="ginaLucyBanner" />
				</div>
			</div>
			<section className="relative uppercase px-4 pb-20 xl:px-40 ">
				<div className="flex flex-col-reverse  max-w-[1200px] gap-16 px-2 xl:mx-auto md:flex-row md:mb-12">
					<div className="relative shrink-0 h-72 w-56 md:w-64 md:h-[350px] mx-auto ">
						<Image layout="fill" src={ginaLucyTextPic} alt="ginaLucy text pic" />
					</div>
					<div className="flex flex-col justify-center mx-auto max-w-[600px] text-center md:text-left">
						<Typography type="decor" variant="lg" color="primaryDark" className="mb-5">
							{t('ginaLucyBrand')}
						</Typography>
						<Typography variant="sm" type="decor" className="">
							{t('ginaLucyText')}
						</Typography>
					</div>
				</div>
			</section>

			<div className="bg-[url('/assets/images/brands/birkenstock/birkenstockBanner.jpg')] bg-cover bg-center pt-40 mb-12 relative z-10 space-y-1 h-[460px] uppercase text-center md:pt-56 md:mb-28 md:h-[600px] md:px-1" >
				<div className="mx-auto max-w-[630px] space-y-2">
					<Typography type="decor" color="beige" className="block">
						{t('brand')}
					</Typography>
					<Typography type="decor" color="beige" className="text-3xl md:text-xl block">
						{t('birkenstockBrand')}
					</Typography>
					<Typography type="decor" color="beige" className="m-auto normal-case px-2 block md:w-[630px]">
						{t('birkenstockDescriprion')}
					</Typography>
				</div>
			</div>

			<section className="relative uppercase px-4 pb-20 xl:px-40 ">
				<div className="flex flex-col-reverse  max-w-[1200px] gap-16 px-2 xl:mx-auto md:flex-row md:mb-12">
					<div className="flex flex-col justify-center mb-20  mx-auto max-w-[600px] md:text-left md:mb-0">
						<Typography type="decor" variant="lg" color="primaryDark" className="mb-5 text-center">
							{t('birkenstockBrand')}
						</Typography>
						<Typography variant="sm" type="decor" className="text-center">
							{t('birkenstockText')}
						</Typography>
					</div>
					<div className="relative m-auto w-64 h-56 shrink-0 hidden xl:h-80 xl:w-96 md:block">
						<Image layout="fill" src={birkenstockTextPic} alt="birkenstock text pic" />
					</div>
				</div>
				<div className="w-fit mx-auto md:ml-[18%]">
					<Image src={birkenstockUnderTextPic} alt="birkenstock under text pic" />
				</div>
			</section>

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
