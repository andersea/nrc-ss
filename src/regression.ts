import * as NodeRED from 'node-red';
import statistics = require('simple-statistics');

export = (RED: NodeRED.Red) => {
    function RegressionNode(this: NodeRED.Node, props: NodeRED.NodeProperties) {
        RED.nodes.createNode(this, props);

        this.on('input', (msg: any) => {
            if (Array.isArray(msg.payload)) {
                msg.payload = statistics.linearRegression(msg.payload);
            } else {
                this.error('Invalid payload', msg);
            }
        });
    }

    RED.nodes.registerType('regression', RegressionNode);
};
