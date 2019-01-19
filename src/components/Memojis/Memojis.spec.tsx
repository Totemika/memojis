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

});