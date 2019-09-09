(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{267:function(t,a,s){"use strict";s.r(a);var e=s(38),r=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"分隔链表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分隔链表","aria-hidden":"true"}},[t._v("#")]),t._v(" 分隔链表")]),t._v(" "),s("h3",{attrs:{id:"题目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#题目","aria-hidden":"true"}},[t._v("#")]),t._v(" 题目")]),t._v(" "),s("p",[t._v("https://leetcode-cn.com/problems/partition-list/")]),t._v(" "),s("h3",{attrs:{id:"题解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#题解","aria-hidden":"true"}},[t._v("#")]),t._v(" 题解")]),t._v(" "),s("h4",{attrs:{id:"双指针法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#双指针法","aria-hidden":"true"}},[t._v("#")]),t._v(" 双指针法")]),t._v(" "),s("p",[t._v("本题的思路很简单，遍历链表，小于的归一条链，大于等于的归另一条链，最后将两条链组合起来即可。")]),t._v(" "),s("p",[t._v("关键点有以下几点：")]),t._v(" "),s("ol",[s("li",[t._v("需要先创建两个哑指针，这方便我们处理链表为空的情况。这是链表遍历的基本操作")]),t._v(" "),s("li",[t._v("最后需要添加上null作为尾部，afterCursor.next = null，否则提交的时候因为程序无法判断链表是否已经结束，会报heap out of memory的错。")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("partition")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("head"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" x")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" before "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" after "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" beforeCursor "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" before\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" afterCursor "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" after\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("head "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("head"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            beforeCursor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" head\n            beforeCursor "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" beforeCursor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            afterCursor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" head\n            afterCursor "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" afterCursor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        head "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" head"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    beforeCursor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" after"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next\n    afterCursor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" before"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])},[],!1,null,null,null);a.default=r.exports}}]);