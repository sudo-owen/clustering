import { Graph } from './Graph.js';
import { GraphDrawer } from './GraphDrawer.js';

let nodes = 
[{"id":"1"}, 
{"id":"2"}, 
{"id":"3"}, 
{"id":"4"}, 
{"id":"5"}, 
{"id":"6"}, 
{"id":"7"}, 
{"id":"8"}, 
{"id":"9"}, 
{"id":"10"}, 
{"id":"11"}, 
{"id":"12"}, 
{"id":"13"}, 
{"id":"14"}, 
{"id":"15"}, 
{"id":"16"}, 
{"id":"17"}, 
{"id":"18"}, 
{"id":"19"}];
// hack for now (undirected edges have duplicates)
let edges = 
[{"source":"1", "target":"2"}, 
{"source":"2", "target":"3"}, 
{"source":"3", "target":"4"}, 
{"source":"4", "target":"5"}, 
{"source":"5", "target":"6"}, 
{"source":"6", "target":"7"}, 
{"source":"7", "target":"8"}, 
{"source":"8", "target":"9"}, 
{"source":"9", "target":"10"}, 
{"source":"10", "target":"11"}, 
{"source":"11", "target":"12"}, 
{"source":"12", "target":"13"}, 
{"source":"13", "target":"14"}, 
{"source":"14", "target":"15"}, 
{"source":"15", "target":"16"}, 
{"source":"16", "target":"17"}, 
{"source":"17", "target":"18"}, 
{"source":"18", "target":"19"}];
let g = new Graph(nodes, edges);
let drawer = new GraphDrawer(nodes, edges, g);
drawer.draw_graph();
[{"source": "0", "target": "1"}, {"source": "1", "target": "2"}, {"source": "2", "target": "3"},
             {"source": "1", "target": "0"}, {"source": "2", "target": "1"}, {"source": "3", "target": "2"}];