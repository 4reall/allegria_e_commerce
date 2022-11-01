import cn from "classnames";




const PageContainer = (props: any) => {
  return (
    <div
      className={cn(
        "max-w-[1440px]",
        "w-full",
        "mx-auto",
        "px-[15px]",
        "md:px-[20px]",
        "lg:px-[50px]"
      )}
    >
      {props.children}
    </div>
  );
};

export default PageContainer;
