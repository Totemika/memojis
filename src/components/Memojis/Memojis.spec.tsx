import * as React from 'react';
import { mount } from 'enzyme';
import Memojis from "./Memojis";
import {MemoGame} from "../../libs/memo-game";

describe('Initial render', () => {
    const wrapper = mount(<Memojis/>);
    it('should exist', () => {
        expect(wrapper.exists()).toBeTruthy();
    });
    it('should contain as many cards as twice the default symbol diversity when no symbol diversity is passed', () => {
        const cards = wrapper.find('Card');
        expect(cards.length).toEqual(MemoGame.DEFAULT_SYMBOL_DIVERSITY*2);
    });
    it('should render all cards facing down', () => {
        const cards = wrapper.find('Card');
        const facingUpCards = cards.findWhere(card=> card.prop('isFacingUp') === true);
        expect(facingUpCards.length).toBe(0)
    });
    it('should face up a card when clicked', () => {
        const cardBeforeClick = wrapper.find('Card').first();
        const onClick = cardBeforeClick.prop('onClick');
        if(onClick){
            const aMouseEvent = {} as any; // TODO: Review..
            onClick(aMouseEvent);
        }
        expect(onClick).toBeDefined();
        const cardAfterClick = wrapper.find('Card').first();
        expect(cardAfterClick.prop('isFacingUp')).toBe(true);
    });
});