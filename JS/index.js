
 $(document).ajaxStart(function(){
        $("#wait").css("display", "block");
    });
    $(document).ajaxComplete(function(){
        $("#wait").css("display", "none");
    });
    
function displayLoading(target) {
    var element = $(target);
   
}
var bandSir=0;

var vue1 = new Vue({
    el: '#appMensajeros',
    created: function () {
        
    },
    mounted: function () {
        
        this.uploaData();
        
    },
    updated: function () {
        
    },
    
    data: {
        
        dataSourceType:[],
        objCmp: [],
        next:"",
        ant:"",
        url:"https://rickandmortyapi.com/api/character",
        
        
    },
    
    
    methods: {
        uploaData: function () {
            
            setTimeout(function(){  sirJquery()}, 500);
        },
        
        
    }
});
$(window).resize(function () {
    var viewportHeight = $(window).height();
    var headerIntoIframe = $("#banner").height() +10;
    var contenidoH = $("#contenido").height();
    if(contenidoH>(viewportHeight-headerIntoIframe)){
        $('#contenido').height(viewportHeight-headerIntoIframe);
    }
    
});
function sirJquery() {debugger;
    bandSir++;
    if (bandSir === 1) {
        $.get(vue1.url, function(data, status){debugger;
            //            alert("Data: " + data + "\nStatus: " + status);
            vue1.objCmp=data.results;
            if(data.info.next===""){
                
                document.getElementById("BtnSiguiente").style.display = 'none';  
            }else{
                 document.getElementById("BtnSiguiente").style.display = 'block'; 
            }
            
            if(data.info.prev==""){
//                $( "#target" ).hide();
                   document.getElementById("BtnAnterior").style.display = 'none';
            }else{
                 document.getElementById("BtnAnterior").style.display = 'block'; 
            }
            vue1.next=data.info.next;
            vue1.ant=data.info.prev;
            
        });
    }
    bandSir=0;
}
function Anterior(){
    vue1.url=vue1.ant;
    sirJquery();
}
function Siguiente(){debugger
    vue1.url=vue1.next;
    sirJquery();
}