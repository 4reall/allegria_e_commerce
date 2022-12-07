import Typography from 'common/components/_base/Typography/Typography';
import { GetStaticPropsContext } from 'next';
import { useTranslation } from 'next-i18next';
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
import birkenstockTextPic from '../../public/assets/images/brands/birkenstock/birkenstockTextPic.png';
import birkenstockUnderTextPic from '../../public/assets/images/brands/birkenstock/birkenstockUnderTextPic.png';

const Brands = () => {
	const { t } = useTranslation('brands');
	return (
		<main>
			<div className="relative z-10 mb-12 h-[460px] space-y-1 bg-[url('/assets/images/brands/vintageBrand/americanVintageBanner.jpg')] bg-cover bg-center pt-40 text-center uppercase md:mb-28 md:h-[600px] md:px-1 md:pt-56">
				<div className="mx-auto max-w-[630px] space-y-2">
					<Typography font="decor" color="beige" className="block">
						{t('brand')}
					</Typography>
					<Typography
						variant="none"
						font="decor"
						color="beige"
						className="block text-xl md:text-4xl"
					>
						{t('vintageBrand')}
					</Typography>
					<Typography
						font="decor"
						color="beige"
						className="m-auto block px-2 normal-case md:w-[630px]"
					>
						{t('vintageDescriprion')}
					</Typography>
				</div>
			</div>
			<section className="relative px-4 pb-28 uppercase xl:px-40 ">
				<div className="flex max-w-[1200px]  flex-col-reverse gap-16 px-2 md:mb-12 md:flex-row xl:mx-auto">
					<div className="relative m-auto h-56 w-64 shrink-0 xl:h-80 xl:w-96 ">
						<Image
							layout="fill"
							src={americanVintageTextPic}
							alt="american vintage text pic"
						/>
					</div>
					<div className="mx-auto mb-12 md:hidden">
						<Image
							width={345}
							height={345}
							src={americanVintageForSmallScreen}
							alt="american vintage for small screen"
						/>
					</div>
					<div className="mx-auto flex max-w-[600px] flex-col justify-center text-center md:text-left">
						<Typography
							font="decor"
							variant="lg"
							color="primaryDark"
							className="mb-5"
						>
							{t('vintageBrand')}
						</Typography>
						<Typography variant="sm" font="decor" className="">
							{t('vintageText')}
						</Typography>
					</div>
				</div>
				<div className="ml-[60%] hidden md:block">
					<Image
						src={vintageUnderTextPic}
						alt="american vintage under text pic"
					/>
				</div>
			</section>

			<div className="relative z-10 mb-12 h-[460px] space-y-1 bg-[url('/assets/images/brands/deha/dehaBanner.jpg')] bg-cover bg-center pt-40 text-center uppercase md:mb-28 md:h-[600px] md:px-1 md:pt-56">
				<div className="mx-auto max-w-[630px] space-y-2 ">
					<Typography font="decor" color="beige" className="block">
						{t('brand')}
					</Typography>
					<Typography
						font="decor"
						color="beige"
						className="block text-4xl md:text-xl "
					>
						{t('dehaBrand')}
					</Typography>
					<Typography
						font="decor"
						color="beige"
						className="m-auto block px-2 normal-case md:w-[630px]"
					>
						{t('dehaDescriprion')}
					</Typography>
				</div>
			</div>

			<section className="relative px-4 pb-20 uppercase md:pb-28 xl:px-40 ">
				<div className="flex max-w-[1200px]  flex-col-reverse gap-16 px-2 md:mb-12 md:flex-row xl:mx-auto">
					<div className="mx-auto mb-20 flex max-w-[600px] flex-col justify-center md:mb-0 md:pt-12 md:text-left">
						<Typography
							font="decor"
							variant="lg"
							color="primaryDark"
							className="mb-5 text-center"
						>
							{t('dehaBrand')}
						</Typography>
						<div className="text-center">
							<Typography
								variant="sm"
								font="decor"
								className="mb-10 block"
							>
								{t('dehaText')}
							</Typography>
							<div className="mx-auto hidden md:block">
								<Image
									src={dehaUnderTextPic}
									alt="Deha under text pic"
								/>
							</div>
						</div>
					</div>
					<div className="relative hidden h-56 w-64 shrink-0 md:block xl:h-80 xl:w-96">
						<Image
							layout="fill"
							src={dehaTextPic}
							alt="Deha text pic"
						/>
					</div>
				</div>
				<div className="mx-auto mb-12 w-fit md:hidden">
					<Image
						width={280}
						height={280}
						src={dehaWomanLayingSmallScreen}
						alt="Deha woman laying small screen"
					/>
				</div>
				<div className="mx-auto w-fit md:hidden">
					<Image
						width={195}
						height={195}
						src={dehaWomanStandingSmallScreen}
						alt="Deha woman standing small screen"
					/>
				</div>
			</section>

			<div className="mb-14 space-y-1 text-center uppercase md:mb-28">
				<div className="mx-auto mb-12 max-w-[630px] space-y-2 px-1">
					<Typography
						font="decor"
						color="primaryDark"
						className="block"
					>
						{t('brand')}
					</Typography>
					<Typography
						font="decor"
						color="primaryDark"
						className="block text-4xl md:text-xl"
					>
						{t('ginaLucyBrand')}
					</Typography>
					<Typography
						font="decor"
						color="primaryDark"
						className="m-auto block px-2 normal-case md:w-[630px]"
					>
						{t('ginaLucyDescriprion')}
					</Typography>
				</div>
				<div className="relative h-72 md:h-[600px]">
					<Image
						layout="fill"
						className="object-cover"
						src={ginaLucyBanner}
						alt="ginaLucyBanner"
					/>
				</div>
			</div>
			<section className="relative px-4 pb-20 uppercase xl:px-40 ">
				<div className="flex max-w-[1200px]  flex-col-reverse gap-16 px-2 md:mb-12 md:flex-row xl:mx-auto">
					<div className="relative mx-auto h-72 w-56 shrink-0 md:h-[350px] md:w-64 ">
						<Image
							layout="fill"
							src={ginaLucyTextPic}
							alt="ginaLucy text pic"
						/>
					</div>
					<div className="mx-auto flex max-w-[600px] flex-col justify-center text-center md:text-left">
						<Typography
							font="decor"
							variant="lg"
							color="primaryDark"
							className="mb-5"
						>
							{t('ginaLucyBrand')}
						</Typography>
						<Typography variant="sm" font="decor" className="">
							{t('ginaLucyText')}
						</Typography>
					</div>
				</div>
			</section>

			<div className="relative z-10 mb-12 h-[460px] space-y-1 bg-[url('/assets/images/brands/birkenstock/birkenstockBanner.jpg')] bg-cover bg-center pt-40 text-center uppercase md:mb-28 md:h-[600px] md:px-1 md:pt-56">
				<div className="mx-auto max-w-[630px] space-y-2">
					<Typography font="decor" color="beige" className="block">
						{t('brand')}
					</Typography>
					<Typography
						font="decor"
						color="beige"
						className="block text-4xl md:text-xl"
					>
						{t('birkenstockBrand')}
					</Typography>
					<Typography
						font="decor"
						color="beige"
						className="m-auto block px-2 normal-case md:w-[630px]"
					>
						{t('birkenstockDescriprion')}
					</Typography>
				</div>
			</div>

			<section className="relative px-4 pb-20 uppercase xl:px-40 ">
				<div className="flex max-w-[1200px]  flex-col-reverse gap-16 px-2 md:mb-12 md:flex-row xl:mx-auto">
					<div className="mx-auto mb-20 flex max-w-[600px]  flex-col justify-center md:mb-0 md:pt-12 md:text-left">
						<Typography
							font="decor"
							variant="lg"
							color="primaryDark"
							className="mb-5 text-center"
						>
							{t('birkenstockBrand')}
						</Typography>
						<div className="flex flex-col text-center">
							<Typography
								variant="sm"
								font="decor"
								className="mb-10 text-center"
							>
								{t('birkenstockText')}
							</Typography>
							<div className="mx-auto w-fit ">
								<Image
									src={birkenstockUnderTextPic}
									alt="birkenstock under text pic"
								/>
							</div>
						</div>
					</div>
					<div className="relative  hidden h-56 w-64 shrink-0 md:block xl:h-80 xl:w-96">
						<Image
							layout="fill"
							src={birkenstockTextPic}
							alt="birkenstock text pic"
						/>
					</div>
				</div>
			</section>
		</main>
	);
};

export async function getStaticProps({ locale }: GetStaticPropsContext) {
	return {
		props: {
			...(await serverSideTranslations(locale || 'ru', ['brands'])),
		},
	};
}

export default Brands;
