/**
 * Definition for undirected graph.
 * function UndirectedGraphNode(label) {
 *     this.label = label;
 *     this.neighbors = [];   // Array of UndirectedGraphNode
 * }
 */

/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */
//Runtime beats 78.26 % of javascript submissions.
var cloneGraph = function(graph, map1, map2) {
    if(!graph) return graph;
    if(!map1) map1 = new Map();
    if(!map2) map2 = new Map();
    let copy;
    if(map1.has(graph)) {
        copy = map2.get(map1.get(graph));
    } else {
        copy = new UndirectedGraphNode(graph.label);
        map1.set(graph, map1.size);
        map2.set(map1.size - 1, copy);
    }
    for(let index in graph.neighbors) {
        if(map1.has(graph.neighbors[index])) {
            copy.neighbors.push(map2.get(map1.get(graph.neighbors[index])));
        } else {
            copy.neighbors.push(cloneGraph(graph.neighbors[index], map1, map2));
        }
    }
    return copy;
};
