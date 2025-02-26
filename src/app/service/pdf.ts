import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { variable64 } from "../assets/img";

(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;


type Users = {
  usuario: string;
  perfil: string;
  grupo: string;
  nombre: string;
  status: string;
  alta: string;
};
// const generatePDF = (
var generatePDF = (
  users: Users[],
  fecha: string
) => {

  const tableBody = [
    [
      { text: "Usuario", style: "tableHeader" },
      { text: "Perfil", style: "tableHeader" },
      { text: "Grupo", style: "tableHeader" },
      { text: "Nombre", style: "tableHeader" },
      { text: "Status", style: "tableHeader" },
      { text: "Alta", style: "tableHeader" },
      // { text: "Usuario2", style: "tableHeader" },
      // { text: "Perfil2", style: "tableHeader" },
      // { text: "Grupo2", style: "tableHeader" },
      // { text: "Nombre2", style: "tableHeader" },
      // { text: "Status2", style: "tableHeader" },
      // { text: "Alta2", style: "tableHeader" },
    ],
    ...users.map((user) => [
      user.usuario,
      user.perfil,
      user.grupo,
      user.nombre,
      user.status,
      user.alta,

      // user.usuario,
      // user.perfil,
      // user.grupo,
      // user.nombre,
      // user.status,
      // user.alta,
    ]),
  ];


  //const totalGeneral = products.reduce((sum, product) => sum + product.total, 0);


  const content: any[] = [];


  content.push({
    columns: [      
      {
        stack: [
          // { text: `Recibo No. ${reciboNo}`, style: "header" },
          { text: `Fecha: ${fecha}`, style: "subheader" },
        ],
        alignment: "left",
      },
      { image: variable64.miVar, width: 150 },
      {
        qr: 'https://www.cibanco.com/es/cibanco/home',
        fit: 100,
        alignment: "right",
        margin: [0, 5, 0, 5],
      },
    ],
  });




  content.push({ text: "\n" });


  content.push({
    table: {
      headerRows: 1,
      //widths: ["*", "*", "*","*","*", "*"],
      //widths: ["*", "*", "*","*","*", "*","*", "*", "*","*","*", "*"],
      //widths: ["8%", "8%", "8%","8%","8%", "8%","8%", "8%", "8%","8%","8%", "8%"],
      widths: '16%',
      // widths: '8%',
      body: tableBody,
    },
    layout: "lightHorizontalLines",
  });


  // content.push({
  //   columns: [
  //     { text: "", width: "*" },
  //     {
  //       text: `Total: $ ${totalGeneral}`,
  //       style: "total",
  //       alignment: "right",
  //       margin: [0, 10, 0, 10],
  //     },
  //   ],
  // });


  const styles = {
    header: {
      fontSize: 14,
      bold: true,
    },
    subheader: {
      fontSize: 12,
      margin: [0, 5, 0, 5],
    },
    tableHeader: {
      bold: true,
      fontSize: 12,
      color: "black",
    },
    total: {
      fontSize: 5,
      bold: true,
    },
  };


  const docDefinition: any = {
    content,
    styles,
  };

  pdfMake.createPdf(docDefinition).open();
};

export default generatePDF;
