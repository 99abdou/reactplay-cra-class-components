class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            saisi: "",
        };
        }

        handleInputChange = (e) => {
            this.setState({ saisi: e.target.value });
          };
        
          // const handleInput2Change = (event) => {
          //   setInput2(event.target.value);
          // };
        handleDownload = () => {
            const saveText = document.createElement('a');
            let textToSave = new Blob ([this.state.saisi ],{
                type: "text/word"
            });
        
            saveText.href = URL.createObjectURL(textToSave);
            saveText.download = `myFile.txt`;
            document.body.appendChild(saveText);
            saveText.click();
            }

        render () {
            return (
                <div>
                    <div className="container d-flex justify-content-center mt-5">
                        <div className="col-lg-8">
                          <Textera saisi={this.state.saisi}  onChange={this.handleInputChange} />
                        </div>
            
                        <div className="col-lg-4">
                          <InputSaisi saisi={this.state.saisi} />
                        </div>
                </div> 
            
                <div className="d-flex justify-content-center align-content-center mt-5">
                        <Button handleDownload={this.handleDownload} />
                    </div>
                </div>
                

              );
        }
}
class Textera extends React.Component {
    render () {
        return (
        <div className="col-lg-8">
            <textarea  
              onChange={this.props.onChange}
              value={this.props.saisi}
            ></textarea>
        </div>
        )
    }
}

class InputSaisi extends React.Component {
    render () {
        return (
            <div className="col-lg-4">
                <input type="text" className="text-center py-4" value={this.props.saisi} />
            </div>
        )
    }
}

class Button extends React.Component {
    render () {
        return (
        <button type="submit" className='btn btn-secondary' onClick={this.props.handleDownload}>Download</button>
        )
    }
}



ReactDOM.render(<App />, document.getElementById('container'));
