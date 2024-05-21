import React from "react"
import {Link} from "react-router-dom";
import { URLs } from "../../__data__/urls";
import {problem} from '../../assets';

import {Section, StyledRes, StyledText, StyledDesc, Tip, StyledTip, StyledLink} from './result.styled';

const result = "Ваш результат - заниженная самооценка";
const description = "Если в детстве критика и похвала родителей были нечеткими, пространными, ребенок не понимает, что конкретно означает быть хорошим или плохим. Так бывает, когда мы слышим от взрослых что-то вроде: «Что за негодный ребенок мне достался!» или «У Петровых дочь умница, не то что ты» вместо конструктивной критики за конкретный поступок. Тогда в будущем мы можем стать зависимыми от чужого одобрения, постоянно доказывать, что мы нужны — точно так же, как в детстве пытались заслужить признание взрослого. Человек, у которого не было достаточного опыта любви со стороны родителей, не может «просто полюбить» себя. Он будет искать «повод» для этой любви вовне, пристально наблюдая, как к нему относятся окружающие: уважают ли они его? Считают ли «достаточно хорошим»? Вечные спутники такого человека — болезненное восприятие критики, беспричинная ревность к партнеру, отношение к любой неудаче как к тотальному провалу. Если это про вас, попробуйте взглянуть на себя с сочувствием — не как строгий учитель, а как заботливый и внимательный взрослый смотрит на своего ребенка. Признавайте реальность и ее ограничения — не требуйте от себя делать работу в нереалистичные сроки, а от партнера — брать трубку в ту же секунду, как вы набираете его номер. Лучше всего опереться в этом на помощь профессионального психолога. Он научит отслеживать критикующий голос внутри, осознавать свои возможности и принимать ограничения, не сравнивать себя с другими и двигаться навстречу к тому, что для вас по-настоящему важно.";
const tip = "Советуем обсудить результаты со специалистом";

export function Res() {
    return(
    <>
        <Section>
        <StyledRes>{result}</StyledRes>
        <StyledText>{description}</StyledText>
            <StyledDesc>
                <Tip>
                    <StyledTip>{tip}</StyledTip>
                    <StyledLink to={URLs.ui.record}>Запись</StyledLink>
                </Tip>
                <img src={problem} alt="Иллюстрация проблемы" />
            </StyledDesc>
        </Section>
    </>
    );
}