const Svg = ({ viewBox = "0 0 24 24", children, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      style={{ display: "flex", zIndex: "999" }}
      rel="noopener noreferrer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20px"
        height="20px"
        viewBox={viewBox}
        fill="none"
      >
        {children}
      </svg>
    </a>
  );
};

export default Svg;
