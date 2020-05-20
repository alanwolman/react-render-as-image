import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './styles.scss';
import htmlToImage from 'html-to-image';

export type IRenderAsImageProps = {
  children: React.ReactNode,
  width?: number | string,
  height?: number | string,
  alt?: string
}

const initialState = { imageDataUrl: '' };
type State = Readonly<typeof initialState>;

class RenderAsImage extends React.Component<IRenderAsImageProps> {
    private myDiv: HTMLDivElement | null;
    readonly state: State = initialState;

    componentDidMount = () => {
      if (this.myDiv) {
        htmlToImage.toPng(ReactDOM.findDOMNode(this.myDiv.firstElementChild) as HTMLElement)
        .then(
            (dataUrl) => {
              this.setState({...this.state, imageDataUrl: dataUrl });
            }
        );
      }
    }

    render = () => {
      
      return (this.state.imageDataUrl !== '')
                ?  <img src={this.state.imageDataUrl} height={this.props.height} width={this.props.height} alt={this.props.alt}/> 
                : <div ref={c => this.myDiv = c} ><div>{this.props.children}</div></div>;
    }
  };

export default RenderAsImage;