(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{266:function(a,t,n){"use strict";n.r(t);var e=n(38),r=Object(e.a)({},function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h3",{attrs:{id:"盛最多水的容器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#盛最多水的容器","aria-hidden":"true"}},[a._v("#")]),a._v(" 盛最多水的容器")]),a._v(" "),n("p",[a._v("这题其实有两个思路。")]),a._v(" "),n("p",[a._v("第一个当然就是暴力法，计算全部的可能答案，找出最大的。")]),a._v(" "),n("p",[a._v("第二个方法就是双指针法，遍历一开始的时候，指针分别在最左边与最右边。\n我们知道，两边构成的容器，其容量由较矮那边决定，因此如果此时移动高的那边的指针，\n必然不会得到一个更大容量的容器。只有移动矮的那边的指针，才有可能。\n因为尽管底边变小了，但是有可能因为高变大了而得到容量的变大。")]),a._v(" "),n("p",[a._v("另外需要考虑的是，为什么这种方法不会漏掉正确答案？")]),a._v(" "),n("blockquote",[n("p",[a._v("这个题相当于有一个数列{a0,a1,...an-1}一共n个(n>=2)。 取出任意两个值，然后result = min(ax,ay)"),n("em",[a._v("(y-x)。 先不看对结果的计算。让你写出数列中任意两个元素的所有组合。一般的写法不就是先从a0开始 ：<a0,a1><a0,a2>...<a0,an-1>，然后再写其它的。显然对于公式min(ax,ay)")]),a._v("(y-x) 。在第一轮的筛选中，假设左边的a0是短元素（如果左边的数大，那么我们就认为右边的数是a0,从右往左数）。显然<a0,an-1>的组合的值比其他任何以a0为起始的组合的值都大。那么可以将结果定为min(a0,an-1)*(n-1)。然后把a0从数列中排除掉。再对剩余的数列进行上述算法，计算result。最后不断更新result即可得出结果。")])])])},[],!1,null,null,null);t.default=r.exports}}]);