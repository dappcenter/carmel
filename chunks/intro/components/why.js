import React from 'react'
import { Component } from 'react-dom-chunky'
import demo from '../../../assets/studio.gif'


export default class WhySection extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  componentDidMount() {
    super.componentDidMount()
  }

  componentWillUpdate() {
    
  }

  renderTitle() {
    return (
      <h2 style={{fontWeight: 'bold', mnargin: 0}}>
        {whyTitle}
      </h2>
    )
  }

  renderFirstColumn(paragraphs) {
    return (
      <div style={{display: 'flex', flexDirection: 'column'}}>
      {
        paragraphs.map( paragraph =>
          <p>{paragraph}</p>
        )
      }
      </div>
    )
  }

  renderSecondColumn(path) {
    return (
      <div> 
        <img src={path} style={{width: '600px', height: '400px' }}/>
      </div>
    )
  }

  render() {
    return (
      <div style={styles.container}>
        <div style={{display: 'flex', height: '80px', marginBottom: '50px'}}>
          {this.renderTitle()}
        </div>
        {
          whyReasons.map( reason =>
            <div>
              <h3>{reason.title}</h3>
              <div style={styles.columnContainer}>
                <div
                  style={styles.columns}
                >
                  {this.renderFirstColumn(reason.arguments)}
                </div>
                <div
                  style={styles.columns}
                >
                  {this.renderSecondColumn(reason.pathToGif)}
                </div>
              </div>
            </div>
          )
        }
      </div>
      )
    }
    
}

const whyTitle = 'Why invest in Carmel'

const whyReasons = [
  {
    title: 'TweaknLearn',
    arguments: [
      'Introducing the Tweek and learn concept',
      'In Carmel you start with a product and you will learn by tweaking it',
      'Choose from different tempplates ?  I don\'t know.... need some text here. pls help ......'
    ],
    pathToGif: '../../../assets/studio.gif'
  },
  {
    title: 'Challenges micro learning',
    arguments: [
      'We teach you to code using challenges',
      'Challenges contain small task for you to complete and learn to code',
      'Complete challanges and get badges .... gg robi great text there'
    ],
    pathToGif: '../../../assets/challenges.gif'
  }
]

const styles = {
  container: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '50px',
    alignItems: 'center'
  },
  columnContainer: {
    display: 'flex', 
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  columns: {
    margin: '20px',
    maxWidth: '600px'
  }
}