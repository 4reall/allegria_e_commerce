import Image from 'next/image'

const _Image = ({imageSrc,imageAlt}:any) =>{
	return(
		<Image
		src = "/assets/brands/americanVintageBanner.jpg"
		alt = "vintage Brand banner"
		layout = "fill"
		/>
	)
}

export default _Image;