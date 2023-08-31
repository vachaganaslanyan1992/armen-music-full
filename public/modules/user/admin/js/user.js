/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./Modules/User/Resources/assets/admin/js/main.js":
/*!********************************************************!*\
  !*** ./Modules/User/Resources/assets/admin/js/main.js ***!
  \********************************************************/
/***/ (() => {

eval("window.admin.removeSubmitButtonOffsetOn('#permissions');\n$('.permission-parent-actions > .allow-all, .permission-parent-actions > .deny-all, .permission-parent-actions > .inherit-all').on('click', function (e) {\n  var action = e.currentTarget.className.split(/\\s+/)[2].split(/-/)[0];\n  $(\".permission-\".concat(action)).prop('checked', true);\n});\n$('.permission-group-actions > .allow-all, .permission-group-actions > .deny-all, .permission-group-actions > .inherit-all').on('click', function (e) {\n  var action = e.currentTarget.className.split(/\\s+/)[2].split(/-/)[0];\n  $(e.currentTarget).closest('.permission-group').find(\".permission-\".concat(action)).each(function (index, value) {\n    $(value).prop('checked', true);\n  });\n});\n$('.delete-api-key').on('click', function (e) {\n  $('#confirmation-form').attr('action', e.currentTarget.dataset.action);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJ3aW5kb3ciLCJhZG1pbiIsInJlbW92ZVN1Ym1pdEJ1dHRvbk9mZnNldE9uIiwiJCIsIm9uIiwiZSIsImFjdGlvbiIsImN1cnJlbnRUYXJnZXQiLCJjbGFzc05hbWUiLCJzcGxpdCIsImNvbmNhdCIsInByb3AiLCJjbG9zZXN0IiwiZmluZCIsImVhY2giLCJpbmRleCIsInZhbHVlIiwiYXR0ciIsImRhdGFzZXQiXSwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxlZXRjYXJ0Ly4vTW9kdWxlcy9Vc2VyL1Jlc291cmNlcy9hc3NldHMvYWRtaW4vanMvbWFpbi5qcz9kMjM5Il0sInNvdXJjZXNDb250ZW50IjpbIndpbmRvdy5hZG1pbi5yZW1vdmVTdWJtaXRCdXR0b25PZmZzZXRPbignI3Blcm1pc3Npb25zJyk7XHJcblxyXG4kKCcucGVybWlzc2lvbi1wYXJlbnQtYWN0aW9ucyA+IC5hbGxvdy1hbGwsIC5wZXJtaXNzaW9uLXBhcmVudC1hY3Rpb25zID4gLmRlbnktYWxsLCAucGVybWlzc2lvbi1wYXJlbnQtYWN0aW9ucyA+IC5pbmhlcml0LWFsbCcpLm9uKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBsZXQgYWN0aW9uID0gZS5jdXJyZW50VGFyZ2V0LmNsYXNzTmFtZS5zcGxpdCgvXFxzKy8pWzJdLnNwbGl0KC8tLylbMF07XHJcblxyXG4gICAgJChgLnBlcm1pc3Npb24tJHthY3Rpb259YCkucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xyXG59KTtcclxuXHJcbiQoJy5wZXJtaXNzaW9uLWdyb3VwLWFjdGlvbnMgPiAuYWxsb3ctYWxsLCAucGVybWlzc2lvbi1ncm91cC1hY3Rpb25zID4gLmRlbnktYWxsLCAucGVybWlzc2lvbi1ncm91cC1hY3Rpb25zID4gLmluaGVyaXQtYWxsJykub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGxldCBhY3Rpb24gPSBlLmN1cnJlbnRUYXJnZXQuY2xhc3NOYW1lLnNwbGl0KC9cXHMrLylbMl0uc3BsaXQoLy0vKVswXTtcclxuXHJcbiAgICAkKGUuY3VycmVudFRhcmdldCkuY2xvc2VzdCgnLnBlcm1pc3Npb24tZ3JvdXAnKVxyXG4gICAgICAgIC5maW5kKGAucGVybWlzc2lvbi0ke2FjdGlvbn1gKVxyXG4gICAgICAgIC5lYWNoKChpbmRleCwgdmFsdWUpID0+IHtcclxuICAgICAgICAgICAgJCh2YWx1ZSkucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xyXG4gICAgICAgIH0pO1xyXG59KTtcclxuXHJcbiQoJy5kZWxldGUtYXBpLWtleScpLm9uKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAkKCcjY29uZmlybWF0aW9uLWZvcm0nKS5hdHRyKCdhY3Rpb24nLCBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5hY3Rpb24pO1xyXG59KTtcclxuIl0sIm1hcHBpbmdzIjoiQUFBQUEsTUFBTSxDQUFDQyxLQUFLLENBQUNDLDBCQUEwQixDQUFDLGNBQWMsQ0FBQztBQUV2REMsQ0FBQyxDQUFDLDRIQUE0SCxDQUFDLENBQUNDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBQ0MsQ0FBQyxFQUFLO0VBQy9JLElBQUlDLE1BQU0sR0FBR0QsQ0FBQyxDQUFDRSxhQUFhLENBQUNDLFNBQVMsQ0FBQ0MsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDQSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBRXBFTixDQUFDLGdCQUFBTyxNQUFBLENBQWdCSixNQUFNLEVBQUcsQ0FBQ0ssSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUM7QUFDcEQsQ0FBQyxDQUFDO0FBRUZSLENBQUMsQ0FBQyx5SEFBeUgsQ0FBQyxDQUFDQyxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQUNDLENBQUMsRUFBSztFQUM1SSxJQUFJQyxNQUFNLEdBQUdELENBQUMsQ0FBQ0UsYUFBYSxDQUFDQyxTQUFTLENBQUNDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0EsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUVwRU4sQ0FBQyxDQUFDRSxDQUFDLENBQUNFLGFBQWEsQ0FBQyxDQUFDSyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FDMUNDLElBQUksZ0JBQUFILE1BQUEsQ0FBZ0JKLE1BQU0sRUFBRyxDQUM3QlEsSUFBSSxDQUFDLFVBQUNDLEtBQUssRUFBRUMsS0FBSyxFQUFLO0lBQ3BCYixDQUFDLENBQUNhLEtBQUssQ0FBQyxDQUFDTCxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQztFQUNsQyxDQUFDLENBQUM7QUFDVixDQUFDLENBQUM7QUFFRlIsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUNDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBQ0MsQ0FBQyxFQUFLO0VBQ3BDRixDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQ2MsSUFBSSxDQUFDLFFBQVEsRUFBRVosQ0FBQyxDQUFDRSxhQUFhLENBQUNXLE9BQU8sQ0FBQ1osTUFBTSxDQUFDO0FBQzFFLENBQUMsQ0FBQyIsImZpbGUiOiIuL01vZHVsZXMvVXNlci9SZXNvdXJjZXMvYXNzZXRzL2FkbWluL2pzL21haW4uanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Modules/User/Resources/assets/admin/js/main.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./Modules/User/Resources/assets/admin/js/main.js"]();
/******/ 	
/******/ })()
;