

const SlideContent = ({data, mainTitle})=>{


    const sliceString = (str) => {
        if (str.length > 200) {
          return `${str.slice(0, 200)}...`;
        }
        return str;
      };

      console.log(mainTitle)
    return (
        <div className="slideContent">
             <span className="contentMainTitle">{mainTitle}</span>
              <span className="title">{data.title}</span>
              <span className="desc_sort">{data.desc_sort}</span>
              <span className="desc_long">{sliceString(data.desc_long)}</span>
        </div>
    )
}

export default SlideContent;