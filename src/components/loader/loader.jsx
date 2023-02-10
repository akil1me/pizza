import ContentLoader from "react-content-loader";

export const Loader = (props) => {
  return (
    <ContentLoader
      speed={2}
      width={260}
      height={449.6}
      viewBox="0 0 260 449.6"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <circle className="mx-auto" cx="130" cy="130" r="130" />
      <rect x="-3" y="327" rx="0" ry="0" width="255" height="69" />
      <rect x="3" y="274" rx="0" ry="0" width="260" height="26" />
      <rect x="2" y="415" rx="0" ry="0" width="84" height="30" />
      <rect x="161" y="409" rx="16" ry="16" width="99" height="40" />
      <rect x="227" y="428" rx="0" ry="0" width="2" height="2" />
    </ContentLoader>
  );
};
