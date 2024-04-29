const Title = () => {
    return (
        <h1>Topics covered</h1>
    );
};

const List = () => {
    return (
      <dl>
        <dt>
          <a href="G web" style={{ color: "#448EE4" }}>
            Getting stating with the web
          </a>
        </dt>
        <br></br>
        <dd>
          Provides a practical introduction to web Development to comple
          beginners.
        </dd>
        <br />

        <dt>
          <a href="H" style={{ color: "#448EE4" }}>
            HTML - Structuring the web
          </a>
        </dt>
        <br />
        <dd>
          HTML is the language that we used to to structre the different part of
          our content and define what their meaning or purpose is.This topic
          teaches HTML in detail.{" "}
        </dd>
        <br />

        <dt>
          <a href="H" style={{ color: "#448EE4" }}>
            CSS - Styling the web
          </a>
        </dt>
        <br />
        <dd>
          CSS is the language that we used to control our web content's style
          and layout, as well as adding behavior like animation. This topic
          provides commprehensive coverage of CSS.{" "}
        </dd>
        <br />
      </dl>
    );
}

const MainContainer = () => {
    return (
      <div>
        <Title />
        <p>The following is a list of all the topics we cover in the MDN learning area.</p>
        <List />
      </div>
    );
};

ReactDOM.render(<MainContainer />, document.querySelector("#MainContainer"));