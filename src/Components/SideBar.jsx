export default function SideBar(props) {
  const { handleToggleModal, data } = props;
  return (
    <div className="sidebar">
      <div onClick={handleToggleModal} className="bgOverlay"></div>
      <div className="sbContents">
        <h2>{data?.title}</h2>
        <div className="infoContainer">
          <p className="date">{data?.date}</p>
          <p>{data?.explanation}</p>
        </div>
        <button onClick={handleToggleModal}>
          <i class="fa-regular fa-circle-right"></i>{" "}
        </button>
      </div>
    </div>
  );
}
