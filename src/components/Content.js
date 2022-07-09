import React from 'react';

const Content = () => {
    //this plugin give some default style to your blogs and you can with prose and prose-(your tag) get customize style to the tags
    //sometimes you get a dynamic blog from backend and that times you will need this plugin
    return (
      <div className="prose-h1:text-slate-600 prose-p:text-slate-800 prose">
        <h1>Garlic bread with cheese: What the science tells us</h1>
        <p>
          For years parents have espoused the health benefits of eating garlic
          bread with cheese to their children, with the food earning such an
          iconic status in our culture that kids will often dress up as warm,
          cheesy loaf for Halloween.
        </p>
        <p>
          But a recent study shows that the celebrated appetizer may be linked
          to a series of rabies cases springing up around the country.
        </p>
      </div>
    );
};

export default Content;