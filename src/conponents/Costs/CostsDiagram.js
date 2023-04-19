import Diagram from "../Diagram/Diagram";

const CostsDiagram =(props) => {
    
    const diagramDataSets = [
        {label: 'Jan', value: 1},
        {label: 'Feb', value: 3},
        {label: 'Mar', value: 2},
        {label: 'Apr', value: 6},
        {label: 'May', value: 4},
        {label: 'Jun', value: 5},
        {label: 'Jul', value: 9},
        {label: 'Aug', value: 4},
        {label: 'Sep', value: 11},
        {label: 'Oct', value: 2},
        {label: 'Nov', value: 4},
        {label: 'Dec', value: 5},
    ];

    for (const cost in props.costs) {
        const costMonth = cost.date.getMonth();
        diagramDataSets[costMonth].value += cost.amount;
    }
    
    return <Diagram dataSets={diagramDataSets}/>
};
console.log(CostsDiagram)

export default CostsDiagram;