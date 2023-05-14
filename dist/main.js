(()=>{function t(){return document.getElementById("search-text")}document.getElementById("fetch").addEventListener("click",(function(){const e=function(){const e=t();return null!=e||null!=e?e.value:""}();if(""==e)return t().setCustomValidity("Please enter a valid search query"),void t().classList.add("invalid");t().classList.remove("invalid"),async function(t){try{let e=await fetch("https://api.weatherapi.com/v1/current.json?key=876f33319a0e493f8c1171724231404&q="+t,{mode:"cors"});return e.status<200||e.status>299?Promise.reject("Response status: "+e.status):function(t){let e={};e.country=t.location.country,e.city=t.location.name,e.temperature=t.current.temp_c,e.feelslike=t.current.feelslike_c,e.condition=t.current.condition.icon;const n=t.location.localtime;return e.localtime=n.slice(n.indexOf(" ")+1),e}(await e.json())}catch{return Promise.reject()}}(e).then((e=>{!function(t){document.getElementById("location").textContent=t.city,document.getElementById("country").textContent=t.country,document.getElementById("actual").textContent=t.temperature+"°C",document.getElementById("feels-like").innerHTML="feels like<br>"+t.feelslike+"°C";const e=document.getElementById("condition");e.innerHTML="",e.appendChild(function(t){const e=document.createElement("img");return e.src=t,e.classList.add("current-condition"),e}(t.condition)),document.getElementById("localtime").textContent=t.localtime}(e),function(e){let n;const c=255-4*e;n=e>0?"#FF"+c.toString(16)+c.toString(16):e<0?"#"+c.toString(16)+"FF"+c.toString(16):"#FFFFFF",document.body.style.background=n,t().style.background=n}(e.temperature)})).catch((t=>{console.error(t)}))}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiTUEwQkEsU0FBU0EsSUFDUCxPQUFPQyxTQUFTQyxlQUFlLGNBQ2pDLENBNUJvQkQsU0FBU0MsZUFBZSxTQXVHaENDLGlCQUFpQixTQXJHN0IsV0FDRSxNQUFNQyxFQWtCUixXQUNFLE1BQU1DLEVBQVlMLElBQ2xCLE9BQW9CLE1BQWJLLEdBQWtDQyxNQUFiRCxFQUF5QkEsRUFBVUUsTUFBUSxFQUN6RSxDQXJCc0JDLEdBQ3BCLEdBQW1CLElBQWZKLEVBR0YsT0FGQUosSUFBZVMsa0JBQWtCLDBDQUNqQ1QsSUFBZVUsVUFBVUMsSUFBSSxXQUkvQlgsSUFBZVUsVUFBVUUsT0FBTyxXQW9CbENDLGVBQWdDQyxHQUM5QixJQUNFLElBQUlDLFFBQWlCQyxNQUNuQixvRkFDRUYsRUFDRixDQUNFRyxLQUFNLFNBR1YsT0FBSUYsRUFBU0csT0FBUyxLQUFPSCxFQUFTRyxPQUFTLElBQ3RDQyxRQUFRQyxPQUFPLG9CQUFzQkwsRUFBU0csUUFVM0QsU0FBdUJILEdBQ3JCLElBQUlNLEVBQVksQ0FBQyxFQUNqQkEsRUFBbUIsUUFBSU4sRUFBU08sU0FBU0MsUUFDekNGLEVBQWdCLEtBQUlOLEVBQVNPLFNBQVNFLEtBQ3RDSCxFQUF1QixZQUFJTixFQUFTVSxRQUFRQyxPQUM1Q0wsRUFBcUIsVUFBSU4sRUFBU1UsUUFBUUUsWUFDMUNOLEVBQXFCLFVBQUlOLEVBQVNVLFFBQVFHLFVBQVVDLEtBQ3BELE1BQU1DLEVBQVlmLEVBQVNPLFNBQVNRLFVBR3BDLE9BRkFULEVBQXFCLFVBQUlTLEVBQVVDLE1BQU1ELEVBQVVFLFFBQVEsS0FBTyxHQUUzRFgsQ0FDVCxDQWxCZVksT0FEY2xCLEVBQVNtQixPQUdwQyxDQUFFLE1BQ0EsT0FBT2YsUUFBUUMsUUFDakIsQ0FDRixDQXJDRWUsQ0FBaUIvQixHQUNkZ0MsTUFBTUMsS0FtRFgsU0FBcUJDLEdBQ25CckMsU0FBU0MsZUFBZSxZQUFZcUMsWUFBY0QsRUFBS0UsS0FDdkR2QyxTQUFTQyxlQUFlLFdBQVdxQyxZQUFjRCxFQUFLZixRQUN0RHRCLFNBQVNDLGVBQWUsVUFBVXFDLFlBQWNELEVBQUtHLFlBQWMsS0FDbkV4QyxTQUFTQyxlQUFlLGNBQWN3QyxVQUNwQyxpQkFBbUJKLEVBQUtLLFVBQVksS0FDdEMsTUFBTUMsRUFBcUIzQyxTQUFTQyxlQUFlLGFBQ25EMEMsRUFBbUJGLFVBQVksR0FDL0JFLEVBQW1CQyxZQUlyQixTQUFxQkMsR0FDbkIsTUFBTUMsRUFBUTlDLFNBQVMrQyxjQUFjLE9BR3JDLE9BRkFELEVBQU1FLElBQU1ILEVBQ1pDLEVBQU1yQyxVQUFVQyxJQUFJLHFCQUNib0MsQ0FDVCxDQVRpQ0csQ0FBWVosRUFBS1YsWUFDaEQzQixTQUFTQyxlQUFlLGFBQWFxQyxZQUFjRCxFQUFLUixTQUMxRCxDQTVETXFCLENBQVlkLEdBcUVsQixTQUF1QkksR0FDckIsSUFBSVcsRUFDSixNQUFNQyxFQUFxQixJQUFvQixFQUFkWixFQUUvQlcsRUFERVgsRUFBYyxFQUVkLE1BQVFZLEVBQW1CQyxTQUFTLElBQU1ELEVBQW1CQyxTQUFTLElBQy9EYixFQUFjLEVBRXJCLElBQ0FZLEVBQW1CQyxTQUFTLElBQzVCLEtBQ0FELEVBQW1CQyxTQUFTLElBRWpCLFVBR2ZyRCxTQUFTc0QsS0FBS0MsTUFBTUosV0FBYUEsRUFFakNwRCxJQUFld0QsTUFBTUosV0FBYUEsQ0FDcEMsQ0F2Rk1LLENBQWNwQixFQUFPSSxZQUFZLElBRWxDaUIsT0FBT3JCLElBQ05zQixRQUFRQyxNQUFNdkIsRUFBTyxHQUUzQixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBmZXRjaEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmZXRjaCcpO1xyXG5cclxuZnVuY3Rpb24gaGFuZGxlRmV0Y2goKSB7XHJcbiAgY29uc3Qgc2VhcmNoUXVlcnkgPSBnZXRRdWVyeSgpO1xyXG4gIGlmIChzZWFyY2hRdWVyeSA9PSAnJykge1xyXG4gICAgZ2V0U2VhcmNoQm94KCkuc2V0Q3VzdG9tVmFsaWRpdHkoJ1BsZWFzZSBlbnRlciBhIHZhbGlkIHNlYXJjaCBxdWVyeScpO1xyXG4gICAgZ2V0U2VhcmNoQm94KCkuY2xhc3NMaXN0LmFkZCgnaW52YWxpZCcpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2VhcmNoQm94KCkuY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZCcpO1xyXG4gIGZldGNoV2VhdGhlckRhdGEoc2VhcmNoUXVlcnkpXHJcbiAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgIGRpc3BsYXlEYXRhKHJlc3VsdCk7XHJcbiAgICAgIHNldEJhY2tncm91bmQocmVzdWx0LnRlbXBlcmF0dXJlKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKHJlc3VsdCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmVycm9yKHJlc3VsdCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UXVlcnkoKSB7XHJcbiAgY29uc3Qgc2VhcmNoQm94ID0gZ2V0U2VhcmNoQm94KCk7XHJcbiAgcmV0dXJuIHNlYXJjaEJveCAhPSBudWxsIHx8IHNlYXJjaEJveCAhPSB1bmRlZmluZWQgPyBzZWFyY2hCb3gudmFsdWUgOiAnJztcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0U2VhcmNoQm94KCkge1xyXG4gIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLXRleHQnKTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hXZWF0aGVyRGF0YShxdWVyeSkge1xyXG4gIHRyeSB7XHJcbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgJ2h0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9ODc2ZjMzMzE5YTBlNDkzZjhjMTE3MTcyNDIzMTQwNCZxPScgK1xyXG4gICAgICAgIHF1ZXJ5LFxyXG4gICAgICB7XHJcbiAgICAgICAgbW9kZTogJ2NvcnMnLFxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA8IDIwMCB8fCByZXNwb25zZS5zdGF0dXMgPiAyOTkpIHtcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCdSZXNwb25zZSBzdGF0dXM6ICcgKyByZXNwb25zZS5zdGF0dXMpO1xyXG4gICAgfVxyXG4gICAgbGV0IGpzb25SZXNwb25zZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIGxldCBkYXRhID0gcGFyc2VSZXNwb25zZShqc29uUmVzcG9uc2UpO1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfSBjYXRjaCB7XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhcnNlUmVzcG9uc2UocmVzcG9uc2UpIHtcclxuICBsZXQgZm9ybWF0dGVkID0ge307XHJcbiAgZm9ybWF0dGVkWydjb3VudHJ5J10gPSByZXNwb25zZS5sb2NhdGlvbi5jb3VudHJ5O1xyXG4gIGZvcm1hdHRlZFsnY2l0eSddID0gcmVzcG9uc2UubG9jYXRpb24ubmFtZTtcclxuICBmb3JtYXR0ZWRbJ3RlbXBlcmF0dXJlJ10gPSByZXNwb25zZS5jdXJyZW50LnRlbXBfYztcclxuICBmb3JtYXR0ZWRbJ2ZlZWxzbGlrZSddID0gcmVzcG9uc2UuY3VycmVudC5mZWVsc2xpa2VfYztcclxuICBmb3JtYXR0ZWRbJ2NvbmRpdGlvbiddID0gcmVzcG9uc2UuY3VycmVudC5jb25kaXRpb24uaWNvbjtcclxuICBjb25zdCBsb2NhbHRpbWUgPSByZXNwb25zZS5sb2NhdGlvbi5sb2NhbHRpbWU7XHJcbiAgZm9ybWF0dGVkWydsb2NhbHRpbWUnXSA9IGxvY2FsdGltZS5zbGljZShsb2NhbHRpbWUuaW5kZXhPZignICcpICsgMSk7XHJcblxyXG4gIHJldHVybiBmb3JtYXR0ZWQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlEYXRhKGRhdGEpIHtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9jYXRpb24nKS50ZXh0Q29udGVudCA9IGRhdGEuY2l0eTtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY291bnRyeScpLnRleHRDb250ZW50ID0gZGF0YS5jb3VudHJ5O1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY3R1YWwnKS50ZXh0Q29udGVudCA9IGRhdGEudGVtcGVyYXR1cmUgKyAnwrBDJztcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmVlbHMtbGlrZScpLmlubmVySFRNTCA9XHJcbiAgICAnZmVlbHMgbGlrZTxicj4nICsgZGF0YS5mZWVsc2xpa2UgKyAnwrBDJztcclxuICBjb25zdCBjb25kaXRpb25Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uZGl0aW9uJyk7XHJcbiAgY29uZGl0aW9uQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gIGNvbmRpdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVJbWFnZShkYXRhLmNvbmRpdGlvbikpO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2NhbHRpbWUnKS50ZXh0Q29udGVudCA9IGRhdGEubG9jYWx0aW1lO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVJbWFnZShzb3VyY2UpIHtcclxuICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gIGltYWdlLnNyYyA9IHNvdXJjZTtcclxuICBpbWFnZS5jbGFzc0xpc3QuYWRkKCdjdXJyZW50LWNvbmRpdGlvbicpO1xyXG4gIHJldHVybiBpbWFnZTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0QmFja2dyb3VuZCh0ZW1wZXJhdHVyZSkge1xyXG4gIGxldCBiYWNrZ3JvdW5kO1xyXG4gIGNvbnN0IGJhY2tncm91bmRTdWJ0cmFjdCA9IDI1NSAtIHRlbXBlcmF0dXJlICogNDtcclxuICBpZiAodGVtcGVyYXR1cmUgPiAwKSB7XHJcbiAgICBiYWNrZ3JvdW5kID1cclxuICAgICAgJyNGRicgKyBiYWNrZ3JvdW5kU3VidHJhY3QudG9TdHJpbmcoMTYpICsgYmFja2dyb3VuZFN1YnRyYWN0LnRvU3RyaW5nKDE2KTtcclxuICB9IGVsc2UgaWYgKHRlbXBlcmF0dXJlIDwgMCkge1xyXG4gICAgYmFja2dyb3VuZCA9XHJcbiAgICAgICcjJyArXHJcbiAgICAgIGJhY2tncm91bmRTdWJ0cmFjdC50b1N0cmluZygxNikgK1xyXG4gICAgICAnRkYnICtcclxuICAgICAgYmFja2dyb3VuZFN1YnRyYWN0LnRvU3RyaW5nKDE2KTtcclxuICB9IGVsc2Uge1xyXG4gICAgYmFja2dyb3VuZCA9ICcjRkZGRkZGJztcclxuICB9XHJcblxyXG4gIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZCA9IGJhY2tncm91bmQ7XHJcbiAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZldGNoJykuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYmFja2dyb3VuZDtcclxuICBnZXRTZWFyY2hCb3goKS5zdHlsZS5iYWNrZ3JvdW5kID0gYmFja2dyb3VuZDtcclxufVxyXG5cclxuZmV0Y2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVGZXRjaCk7XHJcbiJdLCJuYW1lcyI6WyJnZXRTZWFyY2hCb3giLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNlYXJjaFF1ZXJ5Iiwic2VhcmNoQm94IiwidW5kZWZpbmVkIiwidmFsdWUiLCJnZXRRdWVyeSIsInNldEN1c3RvbVZhbGlkaXR5IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiYXN5bmMiLCJxdWVyeSIsInJlc3BvbnNlIiwiZmV0Y2giLCJtb2RlIiwic3RhdHVzIiwiUHJvbWlzZSIsInJlamVjdCIsImZvcm1hdHRlZCIsImxvY2F0aW9uIiwiY291bnRyeSIsIm5hbWUiLCJjdXJyZW50IiwidGVtcF9jIiwiZmVlbHNsaWtlX2MiLCJjb25kaXRpb24iLCJpY29uIiwibG9jYWx0aW1lIiwic2xpY2UiLCJpbmRleE9mIiwicGFyc2VSZXNwb25zZSIsImpzb24iLCJmZXRjaFdlYXRoZXJEYXRhIiwidGhlbiIsInJlc3VsdCIsImRhdGEiLCJ0ZXh0Q29udGVudCIsImNpdHkiLCJ0ZW1wZXJhdHVyZSIsImlubmVySFRNTCIsImZlZWxzbGlrZSIsImNvbmRpdGlvbkNvbnRhaW5lciIsImFwcGVuZENoaWxkIiwic291cmNlIiwiaW1hZ2UiLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwiY3JlYXRlSW1hZ2UiLCJkaXNwbGF5RGF0YSIsImJhY2tncm91bmQiLCJiYWNrZ3JvdW5kU3VidHJhY3QiLCJ0b1N0cmluZyIsImJvZHkiLCJzdHlsZSIsInNldEJhY2tncm91bmQiLCJjYXRjaCIsImNvbnNvbGUiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=