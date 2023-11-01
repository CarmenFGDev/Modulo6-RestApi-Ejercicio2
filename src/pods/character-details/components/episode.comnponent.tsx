import React from "react";
import * as classes from './episode.styles';

interface Props {
  episodeList: string[];
}

export const Episode: React.FunctionComponent<Props> = (props) => {
  const { episodeList } = props;
  let listItems = episodeList.map((episode,index) =>
    <li key={index}> {episode} </li>
  );
  listItems= listItems.slice(0, Math.min(18,episodeList.length -1));
  return <>
            <h4>Episode</h4>
            <ul className={classes.listItem}>{listItems}</ul>
         </>;
}