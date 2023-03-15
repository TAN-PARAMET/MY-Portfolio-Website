import "./style/Introduction.css";

function Introduction() {
  return (
    <div className="container">
      <div className="text-title">
        <div className="text-welcome">
          <b>Welcome</b>
          <p>To My Website</p>
        </div>
        <div className="text-name">
          <p>HELLO I AM TAN</p>
          <b>PARAMET</b>
          <p>Chuchumchuen</p>
        </div>

        <div className="introduction">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>

      <div className="img-title"></div>
    </div>
  );
}

export default Introduction;
