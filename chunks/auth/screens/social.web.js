import React from 'react'
import { Screen } from 'react-dom-chunky'
import { Card, CardActions, CardActionButtons } from 'rmwc/Card'
import { Button } from 'rmwc/Button'
import { List, notification } from 'antd'

export default class AccountScreen extends Screen {
  constructor (props) {
    super(props)
    this.state = { ...this.state }
  }

  componentDidMount () {
    super.componentDidMount()
  }

  renderMainContent () {
    const width = this.props.isSmallScreen ? '95vw' : '600px'
    const padding = this.props.isSmallScreen ? '2px' : '30px'

    return (<div
      style={{
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
      <Card style={{ width, margin: '10px', padding }}>
        <CardActions style={{ justifyContent: 'center', marginTop: '20px' }}>
          <CardActionButtons style={{ marginLeft: '10px' }}>
            <Button>
              Sign Out
            </Button>
          </CardActionButtons>
        </CardActions>
      </Card>
    </div>)
  }

  components () {
    return [this.renderMainContent()]
  }
}
