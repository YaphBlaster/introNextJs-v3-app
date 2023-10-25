import React from "react";

type Props = {};

const DocsPage = ({ params }: { params: { id: string } }) => {
  return <div>DocsPage: {params.id}</div>;
};

export default DocsPage;
