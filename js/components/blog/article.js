import React from 'react';
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import CardText from 'material-ui/lib/card/card-text';

export function Article({data}) {
  return <Card><CardHeader title={data.title} /><CardText>{data.body}</CardText></Card>;
}
