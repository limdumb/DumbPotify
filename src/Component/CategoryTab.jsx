
import React, { useState } from 'react';

const CategoryTab = ({children}) => {
  //각 탭은 정보가 여러가지 요소가 있음을 명시
  const [activeTab, setActiveTab] = React.useState()


  return(
    <>
      <ul className="Contents__List">
        {children&&children.map((tab) => <li>{tab.props.label}</li>)}
        <li><button>Songs</button></li>
        <li><button>Album</button></li>
        <li><button>Artist</button></li>
      </ul>
        {children&&children.map((tabContent)=> (
          <div>{tabContent.props.children}</div>
        ))}
    </>
  );
}

export default CategoryTab