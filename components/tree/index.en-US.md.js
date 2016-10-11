webpackJsonp([104,197],{1715:function(e,t,d){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}var n=d(1),r=(o(n),d(2));o(r);e.exports={content:["section",["h2","When To Use"],["p","Directory, organization, biological classification, country, and etc. Almost things of the world are tree structure. The ",["code","Tree"]," component is a way of representing the hierarchical relationship of these things\uff0cand you also can expand, collapse, select the treeNodes of it."]],meta:{category:"Components",type:"Views",title:"Tree",filename:"components/tree/index.en-US.md"},toc:["ul",["li",["a",{href:"#When-To-Use"},"When To Use"]],["li",["a",{href:"#API"},"API"]],["li",["a",{href:"#note"},"note"]]],api:["section",["h2","API"],["h3","Tree props"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","multiple"],["td","Whether allow to multiple select treeNode"],["td","bool"],["td","false"]],["tr",["td","checkable"],["td","Whether support checkable treeNode"],["td","bool"],["td","false"]],["tr",["td","defaultExpandAll"],["td","Whether default to expand all treeNodes"],["td","bool"],["td","false"]],["tr",["td","defaultExpandedKeys"],["td","Specify keys of default expanded treeNodes"],["td","String[]"],["td","[]"]],["tr",["td","expandedKeys"],["td","(controlled) Specifies keys of expanded treeNodes"],["td","String[]"],["td","[]"]],["tr",["td","autoExpandParent"],["td","Whether to automatically expand a parent treeNode"],["td","bool"],["td","true"]],["tr",["td","defaultCheckedKeys"],["td","Specifies keys of default checked treeNodes"],["td","String[]"],["td","[]"]],["tr",["td","checkedKeys"],["td","(controlled) Specifies keys of checked treeNodes\uff08PS\uff1a When specifies a key of treeNode which is a parent treeNode, all children treeNodes of its will be checked; And vice versa, when specifies a key of treeNode which is a child treeNode, its parent treeNode will also be checked. When ",["code","checkable"]," and ",["code","checkStrictly"]," is true, it'a object has ",["code","checked"]," and ",["code","halfChecked"]," property, and no matter child treeNode or parent treeNode is checked, they won't impact on eachother."],["td","String[]/{checked:Array",["string"],",halfChecked:Array",["string"],"}"],["td","[]"]],["tr",["td","checkStrictly"],["td","Check treeNode precisely, parent treeNode and children treeNodes are not associated"],["td","bool"],["td","false"]],["tr",["td","defaultSelectedKeys"],["td","Specifies keys of default selected treeNodes"],["td","String[]"],["td","[]"]],["tr",["td","selectedKeys"],["td","(controlled) Specifies keys of selected treeNode"],["td","String[]"],["td","-"]],["tr",["td","onExpand"],["td","Defines a function will be called when expand or collapse a treeNode"],["td","function(expandedKeys, {expanded: bool, node})"],["td","-"]],["tr",["td","onCheck"],["td","Defines a function will be called when the onCheck event occurs"],["td","function(checkedKeys, e:{checked: bool, checkedNodes, node, event})"],["td","-"]],["tr",["td","onSelect"],["td","The callback will be invoked when the user clicks a treeNode"],["td","function(selectedKeys, e:{selected: bool, selectedNodes, node, event})"],["td","-"]],["tr",["td","filterTreeNode"],["td","Defines a function to filter treeNodes\uff08highlight\uff09\uff0cwhen return true, corresponding treeNode will be highlight"],["td","function(node)"],["td","-"]],["tr",["td","loadData"],["td","load data asynchronously"],["td","function(node)"],["td","-"]],["tr",["td","onRightClick"],["td","The call back will be invoked when the user right clicks a treeNoe"],["td","function({event,node})"],["td","-"]],["tr",["td","draggable"],["td","Specifies whether this Tree is draggable\uff08IE>8\uff09"],["td","bool"],["td","false"]],["tr",["td","onDragStart"],["td","Defines a function will be called when the onDragStart event occurs"],["td","function({event,node})"],["td","-"]],["tr",["td","onDragEnter"],["td","Defines a function will be called when the onDragEnter event occurs"],["td","function({event,node,expandedKeys})"],["td","-"]],["tr",["td","onDragOver"],["td","Defines a function will be called when the onDragOver event occurs"],["td","function({event,node})"],["td","-"]],["tr",["td","onDragLeave"],["td","Defines a function will be called when the onDragLeave event occurs"],["td","function({event,node})"],["td","-"]],["tr",["td","onDrop"],["td","Defines a function will be called when the onDrop event occurs"],["td","function({event, node, dragNode, dragNodesKeys})"],["td","-"]]]],["h3","TreeNode props"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","disabled"],["td","whether disabled the treeNode"],["td","bool"],["td","false"]],["tr",["td","disableCheckbox"],["td","whether disable the checkbox of treeNode"],["td","bool"],["td","false"]],["tr",["td","title"],["td","title"],["td","String/element"],["td","'---'"]],["tr",["td","key"],["td","it's used with (default)ExpandedKeys / (default)CheckedKeys / (default)SelectedKeys. P.S.: it must be unique in all of treeNodes of the tree!"],["td","String"],["td","internal calculated position of treeNode"]],["tr",["td","isLeaf"],["td","whether it's leaf node"],["td","bool"],["td","false"]]]],["h2","note"],["p","The number of treeNodes can be very large, but when enable ",["code","checkable"],",\nit will spend more computing time, so we cached some calculations(e.g. ",["code","this.treeNodesStates"],"),\nto avoid double computing. But, this bring some restrictions,\n",["strong","when you async load treeNodes, you should render tree like this"],"\n",["code","{this.state.treeData.length ? <Tree ...>{this.state.treeData.map(t => <TreeNode ... />)}</Tree> : 'loading tree'}"]]]}}});