import React from 'react';
import parse from 'html-react-parser';

const OnThisPage = ({ htmlContent }) => {
  // Function to extract h2 headings and their href attributes from the HTML content
  const extractHeadings = (html) => {
    const headings = [];
    parse(html, {
      replace: (domNode) => {
        if (domNode.name === 'h2') {
          domNode.children.forEach((child) => {
            if (child.data) {
              const href = domNode.children[0].attribs?.href;
              headings.push([child.data, href]);
            }
          });
        }
      },
    });
    return headings;
  };

  const headings = extractHeadings(htmlContent);

  return (
    <div className="on-this-page absolute top-24 right-1/4">
      <h2 className="text-xl font-bold pb-2">On This Page</h2>
      <ul className="text-base space-y-2">
        {headings.map((heading, index) => (
          <li key={index}>
            <a href={heading[1]}>{heading[0]}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OnThisPage;
