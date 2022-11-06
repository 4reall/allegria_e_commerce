import cn from "classnames";

const PageContainer = (props: any) => {
  return (
    <div
      className={cn(
        "w-full",
        "mx-auto",
        "px-4",
        "md:px-5",
        "lg:px-12.5"
      )}
    >
      {props.children}
    </div>
  );
};

export default PageContainer;
