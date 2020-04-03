// Code ClickityClick Component Here

handleClick = () => {
    this.setState(previousState => {
      return {
        count: previousState.count + 1
      }
    })
  }
