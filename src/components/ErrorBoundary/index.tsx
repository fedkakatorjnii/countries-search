import React from "react";
import { Result, Button } from "antd";

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  refreshPage() {
    window.location.reload(false);
  }

  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }

  render() {
    if (this.state.hasError) {
      // Можно отрендерить запасной UI произвольного вида

      return (
        <Result
          status="404"
          title="404"
          subTitle="Sorry, the page you visited does not exist."
          extra={
            <Button type="primary" onClick={this.refreshPage}>
              Reload
            </Button>
          }
        />
      );
    }

    return this.props.children;
  }
}
