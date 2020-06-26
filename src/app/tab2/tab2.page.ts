import {
  Component,
  Input,
  ViewChildren,
  QueryList,
  ElementRef,
  EventEmitter,
  Output,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  cardsx = {
    img:
      'https://images-ssl.gotinder.com/5e25f3a4ef76f601006986de/640x800_75_c6e3bbca-4931-466c-a5a0-cd591f088e4e.webp',
    name: 'Tieu Nghi',
    address: '18 Ly Thuong Kiet',
    location: '5 kilometers away',
  };
  cards: any;
  moveOutWidth: number;
  shiftRequired: boolean;
  transitionInProgress: boolean;
  heartVisible: boolean;
  crossVisible: boolean;

  @ViewChildren('tinderCard') tinderCards: QueryList<ElementRef>;
  tinderCardsArray: Array<ElementRef>;

  constructor(private renderer: Renderer2) {
    this.cards = [
      {
        img:
          'https://images-ssl.gotinder.com/5e25f3a4ef76f601006986de/640x800_75_c6e3bbca-4931-466c-a5a0-cd591f088e4e.webp',
        name: 'Tieu Nghi',
        address: '18 Ly Thuong Kiet',
        location: '12 kilometers away',
        heart: false,
        cross: false,
      },
      {
        img:
          'https://images-ssl.gotinder.com/5edcbc1e2901f70100b427ce/640x800_75_2c3d2d5f-d260-47d7-be56-fcee35662455.webp',
        name: 'Kim Hang',
        address: '112 Ngô Quyền',
        location: '5 kilometers away',
        heart: false,
        cross: false,
      },
      {
        img:
          'https://images-ssl.gotinder.com/5edcbc1e2901f70100b427ce/640x800_75_bb3ff714-77c5-4c8b-9fa4-e32d4ca86d27.webp',
        name: 'My Nhan',
        address: '18 Ly Thuong Kiet',
        location: '15 kilometers away',
        heart: false,
        cross: false,
      },
      {
        img:
          'https://images-ssl.gotinder.com/5edcbc1e2901f70100b427ce/640x800_75_05039cc8-e23b-4daa-a35c-53c76ddaf486.webp',
        name: 'Ai Lien',
        address: '12 Bắc Hải',
        location: '4 kilometers away',
        heart: false,
        cross: false,
      },
      {
        img:
          'https://images-ssl.gotinder.com/5edcbc1e2901f70100b427ce/640x800_75_ea12d55b-9f81-4f1e-afaa-fc4150961c0c.webp',
        name: 'Amy',
        address: '18 Nguyễn Diệu',
        location: '2 kilometers away',
        heart: false,
        cross: false,
      },
      {
        img:
          'https://images-ssl.gotinder.com/5ec151022e16a10100e2d882/640x800_75_2f05d282-618e-4405-abde-74aa2a673760.webp',
        name: 'Tieu Nghi',
        address: '18 Ly Thuong Kiet',
        location: '12 kilometers away',
        heart: false,
        cross: false,
      },
      {
        img:
          'https://images-ssl.gotinder.com/5edcbc1e2901f70100b427ce/640x800_75_2c3d2d5f-d260-47d7-be56-fcee35662455.webp',
        name: 'Kim Hang',
        address: '112 Ngô Quyền',
        location: '5 kilometers away',
      },
      {
        img:
          'https://images-ssl.gotinder.com/5eee49d443bf720100b7df3f/640x800_75_8b381e53-03d0-42d1-992f-80c91de48bae.webp',
        name: 'My Nhan',
        address: '18 Ly Thuong Kiet',
        location: '15 kilometers away',
        heart: false,
        cross: false,
      },
      {
        img:
          'https://images-ssl.gotinder.com/5edcbc1e2901f70100b427ce/640x800_75_05039cc8-e23b-4daa-a35c-53c76ddaf486.webp',
        name: 'Ai Lien',
        address: '12 Bắc Hải',
        location: '4 kilometers away',
        heart: false,
        cross: false,
      },
      {
        img:
          'https://images-ssl.gotinder.com/5eee49d443bf720100b7df3f/640x800_75_b027d595-d383-4cdf-81d9-061593c18f57.webp',
        name: 'Amy',
        address: '18 Nguyễn Diệu',
        location: '2 kilometers away',
        heart: false,
        cross: false,
      },
    ];
  }

  loadTinderCards() {
    this.cards = [
      {
        img:
          'https://images-ssl.gotinder.com/5ef1efa14cfc0401005b213a/640x800_75_8e278788-4236-4805-a545-a0e9a78100cc.webp',
        name: 'Tieu Nghi',
        address: '18 Ly Thuong Kiet',
        location: '12 kilometers away',
        heart: false,
        cross: false,
      },
      {
        img:
          'https://images-ssl.gotinder.com/5ef1efa14cfc0401005b213a/640x800_75_bafbb28c-8108-4dae-8297-584ef74032d4.webp',
        name: 'Kim Hang',
        address: '112 Ngô Quyền',
        location: '5 kilometers away',
        heart: false,
        cross: false,
      },
      {
        img:
          'https://images-ssl.gotinder.com/5eee49d443bf720100b7df3f/640x800_75_8b381e53-03d0-42d1-992f-80c91de48bae.webp',
        name: 'My Nhan',
        address: '18 Ly Thuong Kiet',
        location: '15 kilometers away',
        heart: false,
        cross: false,
      },
      {
        img:
          'https://images-ssl.gotinder.com/5ef55883b90ac90100736fc7/640x800_75_2f729619-7b0f-4c2f-b1cd-e22ac69360e4.webp',
        name: 'Ai Lien',
        address: '12 Bắc Hải',
        location: '4 kilometers away',
        heart: false,
        cross: false,
      },
      {
        img:
          'https://images-ssl.gotinder.com/5ef57608e0379f01008688fd/640x800_75_cb5a6c26-1b88-4865-9e4a-260dc3efd409.webp',
        name: 'Amy',
        address: '18 Nguyễn Diệu',
        location: '2 kilometers away',
        heart: false,
        cross: false,
      },
      {
        img:
          'https://images-ssl.gotinder.com/5e27f03f600eff0100cca0c8/640x800_75_f2856e71-4d5c-4311-81f5-f1efb915eb58.webp',
        name: 'Tieu Nghi',
        address: '18 Ly Thuong Kiet',
        location: '12 kilometers away',
        heart: false,
        cross: false,
      },
      {
        img:
          'https://images-ssl.gotinder.com/5e27f03f600eff0100cca0c8/640x800_75_5f52376a-9a86-43fc-97bf-c876a406e3d5.webp',
        name: 'Kim Hang',
        address: '112 Ngô Quyền',
        location: '5 kilometers away',
        heart: false,
        cross: false,
      },
      {
        img:
          'https://images-ssl.gotinder.com/5e27f03f600eff0100cca0c8/640x800_75_d8ec90af-a664-4608-91f3-662f904e82a1.webp',
        name: 'My Nhan',
        address: '18 Ly Thuong Kiet',
        location: '15 kilometers away',
        heart: false,
        cross: false,
      },
      {
        img:
          'https://images-ssl.gotinder.com/5ef4a67af776da0100878235/640x800_75_e3be7574-d8d7-4e81-b5d1-542b4c799a4c.webp',
        name: 'Ai Lien',
        address: '12 Bắc Hải',
        location: '4 kilometers away',
        heart: false,
        cross: false,
      },
      {
        img:
          'https://images-ssl.gotinder.com/5edcbc1e2901f70100b427ce/640x800_75_ea12d55b-9f81-4f1e-afaa-fc4150961c0c.webp',
        name: 'Amy',
        address: '18 Nguyễn Diệu',
        location: '2 kilometers away',
        heart: false,
        cross: false,
      },
      {
        img:
          'https://images-ssl.gotinder.com/5ef4a67af776da0100878235/640x800_75_0af81454-2262-4741-8c3d-7eeca02dac7c.webp',
        name: 'Tieu Nghi',
        address: '18 Ly Thuong Kiet',
        location: '12 kilometers away',
        heart: false,
        cross: false,
      },
      {
        img:
          'https://images-ssl.gotinder.com/5dfc960f2974620100171025/640x800_75_7fa0443f-9f6b-47a1-9fe1-dc6efaac27c5.webp',
        name: 'Kim Hang',
        address: '112 Ngô Quyền',
        location: '5 kilometers away',
        heart: false,
        cross: false,
      },

      {
        img:
          'https://images-ssl.gotinder.com/5dfc960f2974620100171025/640x800_75_3c76c5cf-0fba-4c60-9f6c-dff3d2a511be.webp',
        name: 'Kim Hang',
        address: '112 Ngô Quyền',
        location: '5 kilometers away',
        heart: false,
        cross: false,
      },
      {
        img:
          'https://images-ssl.gotinder.com/5dfc960f2974620100171025/640x800_75_806dc844-7b15-4f05-8e33-e9efa85d2169.webp',
        name: 'My Nhan',
        address: '18 Ly Thuong Kiet',
        location: '15 kilometers away',
        heart: false,
        cross: false,
      },
      {
        img:
          'https://images-ssl.gotinder.com/5edc8d15601e450100837594/640x800_75_4c000349-26ca-4f81-81e4-71eea830e2ca.webp',
        name: 'Ai Lien',
        address: '12 Bắc Hải',
        location: '4 kilometers away',
        heart: false,
        cross: false,
      },
      {
        img:
          'https://images-ssl.gotinder.com/5edc8d15601e450100837594/640x800_75_ceda1151-ba6b-4d0f-b4ab-d8297e48d652.webp',
        name: 'Amy',
        address: '18 Nguyễn Diệu',
        location: '2 kilometers away',
        heart: false,
        cross: false,
      },
      {
        img:
          'https://images-ssl.gotinder.com/5edc8d15601e450100837594/640x800_75_42a47ba2-b4f6-4f7b-82ba-a23c3251d94a.webp',
        name: 'Tieu Nghi',
        address: '18 Ly Thuong Kiet',
        location: '12 kilometers away',
        heart: false,
        cross: false,
      },
      {
        img:
          'https://images-ssl.gotinder.com/5edc8d15601e450100837594/640x800_75_5b6341f3-2229-4ced-865c-6c7cefa54cbc.webp',
        name: 'Kim Hang',
        address: '112 Ngô Quyền',
        location: '5 kilometers away',
        heart: false,
        cross: false,
      },
    ];
  }

  addTinderCards() {
    this.cards = [
      {
        img:
          'https://images-ssl.gotinder.com/5ef1efa14cfc0401005b213a/640x800_75_8e278788-4236-4805-a545-a0e9a78100cc.webp',
        name: 'Tieu Nghi',
        address: '18 Ly Thuong Kiet',
        location: '12 kilometers away',
        heart: false,
        cross: false,
      },
      {
        img:
          'https://images-ssl.gotinder.com/5ef1efa14cfc0401005b213a/640x800_75_bafbb28c-8108-4dae-8297-584ef74032d4.webp',
        name: 'Kim Hang',
        address: '112 Ngô Quyền',
        location: '5 kilometers away',
        heart: false,
        cross: false,
      },
      {
        img:
          'https://images-ssl.gotinder.com/5eee49d443bf720100b7df3f/640x800_75_8b381e53-03d0-42d1-992f-80c91de48bae.webp',
        name: 'My Nhan',
        address: '18 Ly Thuong Kiet',
        location: '15 kilometers away',
        heart: false,
        cross: false,
      },
      {
        img:
          'https://images-ssl.gotinder.com/5ef55883b90ac90100736fc7/640x800_75_2f729619-7b0f-4c2f-b1cd-e22ac69360e4.webp',
        name: 'Ai Lien',
        address: '12 Bắc Hải',
        location: '4 kilometers away',
        heart: false,
        cross: false,
      },
      {
        img:
          'https://images-ssl.gotinder.com/5ef57608e0379f01008688fd/640x800_75_cb5a6c26-1b88-4865-9e4a-260dc3efd409.webp',
        name: 'Amy',
        address: '18 Nguyễn Diệu',
        location: '2 kilometers away',
        heart: false,
        cross: false,
      },
      {
        img:
          'https://images-ssl.gotinder.com/5e27f03f600eff0100cca0c8/640x800_75_f2856e71-4d5c-4311-81f5-f1efb915eb58.webp',
        name: 'Tieu Nghi',
        address: '18 Ly Thuong Kiet',
        location: '12 kilometers away',
        heart: false,
        cross: false,
      },
      {
        img:
          'https://images-ssl.gotinder.com/5e27f03f600eff0100cca0c8/640x800_75_5f52376a-9a86-43fc-97bf-c876a406e3d5.webp',
        name: 'Kim Hang',
        address: '112 Ngô Quyền',
        location: '5 kilometers away',
        heart: false,
        cross: false,
      },
      {
        img:
          'https://images-ssl.gotinder.com/5e27f03f600eff0100cca0c8/640x800_75_d8ec90af-a664-4608-91f3-662f904e82a1.webp',
        name: 'My Nhan',
        address: '18 Ly Thuong Kiet',
        location: '15 kilometers away',
        heart: false,
        cross: false,
      },
      {
        img:
          'https://images-ssl.gotinder.com/5ef4a67af776da0100878235/640x800_75_e3be7574-d8d7-4e81-b5d1-542b4c799a4c.webp',
        name: 'Ai Lien',
        address: '12 Bắc Hải',
        location: '4 kilometers away',
        heart: false,
        cross: false,
      },
      {
        img:
          'https://images-ssl.gotinder.com/5edcbc1e2901f70100b427ce/640x800_75_ea12d55b-9f81-4f1e-afaa-fc4150961c0c.webp',
        name: 'Amy',
        address: '18 Nguyễn Diệu',
        location: '2 kilometers away',
        heart: false,
        cross: false,
      },
      {
        img:
          'https://images-ssl.gotinder.com/5ef4a67af776da0100878235/640x800_75_0af81454-2262-4741-8c3d-7eeca02dac7c.webp',
        name: 'Tieu Nghi',
        address: '18 Ly Thuong Kiet',
        location: '12 kilometers away',
        heart: false,
        cross: false,
      },
      {
        img:
          'https://images-ssl.gotinder.com/5dfc960f2974620100171025/640x800_75_7fa0443f-9f6b-47a1-9fe1-dc6efaac27c5.webp',
        name: 'Kim Hang',
        address: '112 Ngô Quyền',
        location: '5 kilometers away',
        heart: false,
        cross: false,
      },

      {
        img:
          'https://images-ssl.gotinder.com/5dfc960f2974620100171025/640x800_75_3c76c5cf-0fba-4c60-9f6c-dff3d2a511be.webp',
        name: 'Kim Hang',
        address: '112 Ngô Quyền',
        location: '5 kilometers away',
        heart: false,
        cross: false,
      },
      {
        img:
          'https://images-ssl.gotinder.com/5dfc960f2974620100171025/640x800_75_806dc844-7b15-4f05-8e33-e9efa85d2169.webp',
        name: 'My Nhan',
        address: '18 Ly Thuong Kiet',
        location: '15 kilometers away',
        heart: false,
        cross: false,
      },
      {
        img:
          'https://images-ssl.gotinder.com/5edc8d15601e450100837594/640x800_75_4c000349-26ca-4f81-81e4-71eea830e2ca.webp',
        name: 'Ai Lien',
        address: '12 Bắc Hải',
        location: '4 kilometers away',
        heart: false,
        cross: false,
      },
      {
        img:
          'https://images-ssl.gotinder.com/5edc8d15601e450100837594/640x800_75_ceda1151-ba6b-4d0f-b4ab-d8297e48d652.webp',
        name: 'Amy',
        address: '18 Nguyễn Diệu',
        location: '2 kilometers away',
        heart: false,
        cross: false,
      },
      {
        img:
          'https://images-ssl.gotinder.com/5edc8d15601e450100837594/640x800_75_42a47ba2-b4f6-4f7b-82ba-a23c3251d94a.webp',
        name: 'Tieu Nghi',
        address: '18 Ly Thuong Kiet',
        location: '12 kilometers away',
        heart: false,
        cross: false,
      },
      {
        img:
          'https://images-ssl.gotinder.com/5edc8d15601e450100837594/640x800_75_5b6341f3-2229-4ced-865c-6c7cefa54cbc.webp',
        name: 'Kim Hang',
        address: '112 Ngô Quyền',
        location: '5 kilometers away',
        heart: false,
        cross: false,
      },
    ].concat(this.cards);
  }

  userClickedButton(event, heart) {
    event.preventDefault();
    if (!this.cards.length) {
      return false;
    }
    if (heart) {
      this.renderer.setStyle(
        this.tinderCardsArray[0].nativeElement,
        'transform',
        'translate(' + this.moveOutWidth + 'px, -100px) rotate(-30deg)'
      );
      this.toggleChoiceIndicator(false, true);
    } else {
      this.renderer.setStyle(
        this.tinderCardsArray[0].nativeElement,
        'transform',
        'translate(-' + this.moveOutWidth + 'px, -100px) rotate(30deg)'
      );
      this.toggleChoiceIndicator(true, false);
    }
    this.shiftRequired = true;
    this.transitionInProgress = true;
  }

  handlePan(event, index?: any) {
    if (
      event.deltaX === 0 ||
      (event.center.x === 0 && event.center.y === 0) ||
      !this.cards.length
    ) {
      return;
    }

    if (this.transitionInProgress) {
      this.handleShift(index);
    }

    this.renderer.addClass(this.tinderCardsArray[0].nativeElement, 'moving');

    if (event.deltaX > 0) {
      this.toggleChoiceIndicator(false, true, index);
    }
    if (event.deltaX < 0) {
      this.toggleChoiceIndicator(true, false, index);
    }

    let xMulti = event.deltaX * 0.03;
    let yMulti = event.deltaY / 80;
    let rotate = xMulti * yMulti;

    this.renderer.setStyle(
      this.tinderCardsArray[0].nativeElement,
      'transform',
      'translate(' +
        event.deltaX +
        'px, ' +
        event.deltaY +
        'px) rotate(' +
        rotate +
        'deg)'
    );

    // this.shiftRequired = true;
    console.log('pan');
  }

  handlePanEnd(event, index) {
    this.toggleChoiceIndicator(false, false, index);

    if (!this.cards.length) {
      return;
    }

    this.renderer.removeClass(this.tinderCardsArray[0].nativeElement, 'moving');

    let keep = Math.abs(event.deltaX) < 80 || Math.abs(event.velocityX) < 0.5;
    if (keep) {
      this.renderer.setStyle(
        this.tinderCardsArray[0].nativeElement,
        'transform',
        ''
      );
      this.shiftRequired = false;
    } else {
      let endX = Math.max(
        Math.abs(event.velocityX) * this.moveOutWidth,
        this.moveOutWidth
      );
      let toX = event.deltaX > 0 ? endX : -endX;
      let endY = Math.abs(event.velocityY) * this.moveOutWidth;
      let toY = event.deltaY > 0 ? endY : -endY;
      let xMulti = event.deltaX * 0.03;
      let yMulti = event.deltaY / 80;
      let rotate = xMulti * yMulti;

      this.renderer.setStyle(
        this.tinderCardsArray[0].nativeElement,
        'transform',
        'translate(' +
          toX +
          'px, ' +
          (toY + event.deltaY) +
          'px) rotate(' +
          rotate +
          'deg)'
      );

      this.shiftRequired = true;
    }
    this.transitionInProgress = true;

    console.log('end');
  }

  toggleChoiceIndicator(cross, heart, index) {
    // this.crossVisible = cross;
    // this.heartVisible = heart;
    this.cards[index].cross = cross;
    this.cards[index].heart = heart;
  }

  handleShift(index) {
    this.transitionInProgress = false;
    // this.toggleChoiceIndicator(false, false, index);
    if (this.shiftRequired) {
      this.shiftRequired = false;
      this.cards.shift();
      if (this.cards.length === 0) {
        this.addTinderCards();
      }
    }
    console.log('shift');
  }

  ngAfterViewInit() {
    this.moveOutWidth = document.documentElement.clientWidth * 1.5;
    this.tinderCardsArray = this.tinderCards.toArray();
    this.tinderCards.changes.subscribe(() => {
      this.tinderCardsArray = this.tinderCards.toArray();
    });
  }
}
