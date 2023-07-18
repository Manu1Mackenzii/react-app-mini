class Component {
  constructor(props) {
    this.props = props;
  
  }

  shouldUpdate(newProps) {
    for (const prop in newProps) {
      if (
        newProps.hasOwnProperty(prop) &&
        (!this.props.hasOwnProperty(prop) ||
          this.props[prop] !== newProps[prop])
      ) {
        return true;
      }
    }
    return false;
  }

  render() {
 
  }

  display() {
    const shouldUpdate = this.shouldUpdate();
    if (shouldUpdate) {
      const element = this.render();
      parentNode.appendChild(element);
    }
  }
}
