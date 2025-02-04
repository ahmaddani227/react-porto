import CommentedContent from "../../../../components/Layouts/Ide/CommentedContent";
import Content from "../../../../components/Layouts/Ide/Content";

export default function Bio() {
  return (
    <Content>
      <div className="py-2 lg:px-4 px-fluid">
        <CommentedContent>
          <h1 className="font-medium">About me</h1>
          <p className="text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod quis
            maiores rerum possimus iusto at delectus expedita cum velit eaque,
            fugiat porro quo distinctio perspiciatis iure, consectetur deleniti
            animi incidunt.
          </p>
          <br />
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            distinctio alias sed quos mollitia eius maiores quidem quod iusto
            dolorem dicta sapiente minima earum odio, animi praesentium harum
            sunt! Odio?
          </p>
        </CommentedContent>
      </div>
    </Content>
  );
}
