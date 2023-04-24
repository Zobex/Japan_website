const ScrollComponents = ({ icon, note, place }) => {
  return (
    <div className="footer">
      {icon}
      <div className="mini-footer_components">
        {note}
        <br />
        {place}
      </div>
    </div>
  );
};

export default ScrollComponents;
