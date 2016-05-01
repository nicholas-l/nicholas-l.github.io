import React from 'react';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';

export default function BlogSummary({ data, onTouchTap }) {
  return (<List>
      {data.blog.filter((article, i) => i < 3)
        .map((article, i) => <ListItem
        key={article.number}
        onTouchTap={() => {
          console.log('test');
          onTouchTap(`/blog/${article.number}`)}}
        primaryText={article.title}
        secondaryText={article.body.slice(0, 30)}
      />)}
    </List>);
}
