import { Component, OnInit } from '@angular/core';
import { BarcodeScanner ,BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  scanData : {};
  options :BarcodeScannerOptions;
  constructor(private barcodeScanner: BarcodeScanner) { }

  ngOnInit() {
  }
  scan(){
    this.options = {
      prompt : "Scan your barcode "
    }
    this.barcodeScanner.scan(this.options).then((barcodeData) => {
        console.log(barcodeData);
        this.scanData = barcodeData;
      },(err) => {
        console.log("Error occured : " + err);
    })
  }
}
