/** Exportação nomeada */
export function Planetas() {
    return (
      <img
        src="https://tm.ibxk.com.br/2023/08/25/25102344019086.jpeg?ims=352x208"
        alt="Arte digital do planeta saturno"
      />
    );
  }

/** Exportação nomeada */
export function Terra(){
    return (
        <img
          src="https://recreio.uol.com.br/media/_versions/universo/planeta_terra_capa_widelg.jpg"
          alt="Planeta terra"
        />
      );
}

/** Exportação padrão -> diferença da nomeada é a palavra default */
export default function Galeria(){
    return (
        <>
         {/* <svg
      style={{
        flex: 1
      }}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path stroke="pink" fill="black" d="M10 10H510V210H10z" />
    </svg> */}
        <section>
            <Planetas/>
            <Planetas/>
        </section>
        </>
    );
}

export function Justi(){
    return (
        <img
        src="data:image/jpeg;base64,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"
        alt="Planeta terra"
      />
    );
}
export function Manoel(){
    return (
        <img
        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVEhISEhQYGBgZGBgYGBgZGBIYGBgYGRgZGRkYHBkcIS4lHB4rHxgYJjgmKy8xNTU1Gic7QDszPy40NTEBDAwMEA8QHhISHzQrJSs2NTQ0NDQ0NDQ1NDY0NjQ0NDQ0NjQ0NDQ0NDY0NDQ0NDQ0NDQ0NDQ0NjE0NDQ0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIDBAYFBwj/xABBEAACAQIEAwYCCAQEBQUAAAABAgADEQQSITEFQVEGImFxgZEToQcyQlKxwdHwFGJyghUjkuFTorLS8RYXM0PC/8QAGgEAAgMBAQAAAAAAAAAAAAAAAAECAwQFBv/EACkRAAICAQQABQUAAwAAAAAAAAABAhEDBBIhMQUTIkFRYYGRobEUMnH/2gAMAwEAAhEDEQA/APUIsSEkQHgx0YI8QBhFiRRAQoixBHQGEIQgIWEIQsYQhCAghCEACEIQGEIGEBBCEIwCEIQAIQiQGLEhEiELCJeEBlYRYghABwMeJHJFgIWKIkUQAVY4RFjhAAhMj207bJgv8pAHrFc2UnuqD9XNbUk8h016X8+r9uMdXFvjFBc3yKq+Q7ov841FsTZ7faLaeLYTjGPBzJiWe9iQSb78idOZM2vZ/turMlHGL8OobAObhGO3MxNAbSJFMIDEhCEACEIQAIQhAAhEhCxiwhEMAFiGLEMBBEvAxsBi3hEhALK6xYgiwAWOQxscsBD4oiRRAByyvxTGCjQrVm2p03fr9VSbW57Sws43bVC3DcaFFyKDtb+kZj8lMF2B87PinrVS9QlndixJ3JJuZrcPwE5E79juwA08NbzL8KT/ADAxtYHebunXNxbaVajLKLSia8GKMk3In4XgWpkbNr0Gvp1mtrcPw+IpmnUQG9r8ip+8p3E4GHqkqJ0MKzXuN5k86V8mh4Y1wjS9mazqr4Ws2Z6Vsj/fpEWRj/MLFT5DrO3Mzg66pVpVKhy/XpknQBWU1NfWmB/dNNfpNsJblZz5x2yoSEISZAIQhBDCJFiQYghAxIAOhEhAAiEwhaAxDEMWITAQQhCAFcRYkdAAjljYogMkiiJCAh6xK9EOj02+q6sh8mBB+RirI8YjtTqKjZXKMFbazEGxvy15xAfO+FwISs2Gq91kfI2311bK3zE2FWjkACgtYAWF79JW4jwtXxKh1ZKwbOzcyytqG11J1OYTo10YXAG+n7MyZpqVM6OKDhxZTwvFU+L8Jls3gysAehPXwnQ4vjno0GqUtWJCrzAJM5T8HVKZRFZczKxsVtdQQCTufrH3nX4KqE/CazoRzsbW2sfC34yt7bTRalJxdk/ZfDvXpFMU11qWzasGBzA2sRpYAC46n19LImEo1UotUW2XICTdtLWuDc7LacDD9qsRTNN6jsSysbElgSupFibarc+k6ei0886k40qOVrcqwtJpu7PWTEnn9PtrVbY0zoDa2tiLg2DX2Ms4btu5F2pKbEg5WKkEdCbg9Zpfh+de37MK1+L3tfY28JkG7d072WizHn3kAHqd5bw3bCi31lZfHusPcG/ylb0eZK3Fln+Xh+TSRJxk7U4Um3xLeavb5CXE4vh2IC1kJ6ZlH4yuWHJHtP8ABZHPjl01+S6Ykhw2LRwSjq4G+Ug/hJb+B9jINNcMtTTVoWEQt4RbnpEAhheJr0/CAB6fOAwMLQynw9z+kXIfCAhLQi5D1hACqD4R3p+EeFjrQGRgHp+EUKen4SSKBAQ0X6R1jHARwEAGhTHBTHgTncc4ouGotVbU7Kv3m5Dy5mEYuTUV2yMpKKtmD+kLjdCniaahC9RFOdlyizaFF152Juehtry53CuLLXRXFg1gHXfK3MeXQ8xMbxnEmpWqOxuzMWJ8TvKWHrOjZqbZW+R8COc6ObwqMsXp/wBv6LDrJJq+j0Hi/EPh082W4uAfwHzM5GC4w+YENTC2AClczegUZjaVcB2mD2p4hACCO8LlT4kbg+PvNLg6NNh8RMlty4It6zhTg8T2yjydaGRTVp8EfHPifCqnKL1KXw0BYZ3chg4t1yageBmG4fWJRqOzqc1PqGXUrbr4Tv8AaviqVamGp0nulMs2dT3c5tbKRvYA6jTveEzfFeJPVrfFLG62CbXULtt43PrPS+GYpYsVtVfLOPqprJNpdLolDswDo2Vl7y3Njlue6L7lWzLbmLRz8WOcVFuAwAZeRvuLdL7SOrTLo1RBpqzgfZa3e/tYWYHqtuk5QbQCdFyp0Z9kZdmuTFMuuay7k8teum8ReJg6lgo5XJufPoPCZxsQxABOgjGcmXOaMy0sX2aqrxRQBlYMTsBz8+kr0uLkMq3FuZPjppM38TXSMdyZW8iolHRwSo22B4uUYZXZWzbgkHx9Js+E9s3UBaozja97N77H19543TxbXDX1FvlOrhuJEHffl+UhPFhzr1IhLDkxO8bo+geG8Vo1xemwJ3KnRh6fmJfyzx3s2lSu+em2RUOtXWyt0Goudv3a/qeBxdkUO4Y7Z7KoPmLzg6rTxxTqLv6fBt0+XJNetV9fkv5YZYoELTIaRpES0eRC0BjIR9oQArRQIW8Pwii/SAAFjgsS56D3P6QObkB7n9IAPAjgsRQY+xgIo8W4rSw9M1KrWGwAF2Y9FHP8J5X2t7SNinUrTZEUWUPYEkm5NhzOntG9rOONVxVUqxKqxRbXtlXQkeZBPr5TM16zHcn0ne0WijBLJLv+HMz55Tk4rooY/e9t95WTXUS5VS8gw1EZ8rNlU7tZmC+NlFz6TfJVyTg1ton4dhWqVAiZb8yxsqrzZjyAlfjGDqLcKA6a95CHU2NiLjUEEG4Njz2IJuVlDqaNDMo0a7Bc9YqCbMATlAsMqAm5ve5Itfo8SqPTZHWmyggswXIzXuCWymx+sdbD2nLzad58m5qkvyaY5fKhSfZV4YoyoWAK2Kk9Awyk/wBtw39slr8JDXFsrAkG/wB4aEEcjcGW8JhVVbEcrHytaT4ym9g63N7IwP3gO61x94C9zuQ06qSjX1RzJZW5Pa6aOHSwb0n7y91hYkaj9RORWoFGcHQKSAT05fKx9ZoK3DDYvUbKOl7nyE9J+jfheFq0PjPQR6yOUzuAzAAKVIB0U2NrgDYzNq8iww3VfJs081N1Z5JhuDYl1D08PXZSLgrRrNmHIiy6jx2lzD9juI1fqYOqo/nC0/fOVn0laJORLxDI+kjWoJHguH+jHHkDu01/rqL/APkNL1D6JsUbmriKCLuSorPb0KqPnPbPOZvi3FQ3dU9z/q8fLp+7QWrzT4ToGoxVs8+wf0ZUQx+LiHqDkEQUgfO7MfwkfGewKKmbCuQR9liTe3jOzi+NBWWx5kH05SjS7TZ1IG+cqP7iAPnL4vJd2USyJjOBY8JSSkoAamArIbjvk95yBuL3N9pqcLxFFVjUIuNSTqo9L3GvIDciYbH087mtTOVizd4Wv3jmseo2020nY4n2exNfDUsTg2DZSz1KBJD5wLZVN7NbWwNjqDqZnyqvUy7HJSdGx4d2g1s65U+ySe8PEqB3R4XPpNJSqBlDKQQdiNRPJ+zfEGdEaomnQ6EnXlvl0N720B5Tf0cSpHxAyhhq1zltbdWHMePqJzHnqVNGuWNLo7dj4e3+8LGKDHTSUEeXxhJIQArARYCKBAYARwEFjgIIQATi9reLrhcJUqk94jKnPvsCB7C59J3J5p9K/GBanhFI5O/UHZRfloST5iXafH5mVRK8stsWzzp8ct7KhPiSBGnFEjuqF9NfeVrRVW3KeqjZzqjXQ6+usQwvDNJiHIhuLaHkek660QxNVFAaxNSnpkI+0ygbL1+6fAicum5EtJiWBBW4YG4YXBB63EhKF8rsUpPr2LgUtorW0uLgm67HXqL+u+sgwr16dQoHDI6uBfUXykoeoIYLLdGo1RQqogfZgQFD9GQCwvyKjzGhIHQwmDYOjOrd1lL5g2VCpFyxNsqsovfbQjffNOaimpfYI3d1fz72YypXdmDVGufMG3pPTfojxgNTE08xOZUYDTQqSrf9S+0weOp4NGsxYHwBP/iaX6K6tJeIEUmJD02AB3uO97WWVa1xlgki/E05JpNfbg9ohCcLtFxr4ACKRmZSb/dGw9b39p52MW3SOhJpK2Q8f4lcmgh21qEdPu+vOYftDxXJceCkyZsYVStUJ1YjforfqT7TAca4iXYi/ID2nRwYaMk5ubpEeL4iztvpfb2kOHqMjZjpa5tfmdPexMrHu89fwH6xtNgcxJ1uLjw/W4M1/QajwbDBYjP8On4hj+/Wb/sDxEfExFEnQvmTptsPQfKeTcFxRDlzz/Hf9PeaXs5jmWrVdD3lUMNvsun5XmbNi3JpFcW4Ssi7eO+FxlbD0WyI4VwF7pAcXKgjYZw21jYKPsiczgjE1DUZmJ0zEsxJHiSdROr9JhNbFYfEKvdqYZAtubo751HiudP9QlHgYC9ypdGuRkZWU666i34zh5I02dvDTij1nstxElRQdrkDuE7kDceNtfQe+lnm3ZXEOa9IAah8tr7rlNzrzCk+wnpMsxSbjyUZ4qMhYQhLSkhAjhEEcIwACOtEEjxNZUpu7/VVSx56KLn8IuxHM7TcZXCYZqxF20VV6s23oLE+Qng3Eca1aq1R2LMxuSeZM7/bjtQ2McKAVpoTkW+pJ0ZmtpfkOmvWZEVBO/oNN5Ud0lyzHklvfHRNAmR/FiZp0kynaSXgPSQlohNtCwHmRBySJKNllaijkT6yVMcw+qqj0JlEEfeEsU2TmxHkpMalZFwXurLL42vb69vJVlReJYhAyLVcKwKkA6WJF7Lsp03GssK1Lmzn+0D8TAYiipuFY+eX8BeQnjjNUwg9vS/QvC+FK5zuwY72BB9SJoeF8apYHFLWai9TKpAynRM3dZhvyuLabzgVMWzC1OgfA2sR4hrXEtcIaq5yVEcWt3izJcG+5I1tpz95RlhHY4yXD90C37t99e1ntHEO01JKFKtTZWFXKUPLKSMzHyvt10nnHFeKNVeqzG7ZvLTUW+UqcTwdVaipTqCplpI2UOrKKTMylFsBZRo1+fe56mlSqG7O41syNt9dDa58wbzk4cCjyuTRlm33+CXtHxAZ2RD3SpyjwNm/WZRjrm/dzqP3+ssYtycvUd3/AE7f8tpSc9Dpy/Wakq4FCPAx2lnG8LrUBSeshRaqZ6ZNu+u1x05Gx1sR1nd+j/gIxeNRai5qaDO4OxVTop8CbA+BM9L+lngZr4EVkW74c57Aa/DNhUA8AArf2TNkzqORRL4xtM8UV7AAHx9//Anb7PYn/wCW/wB2w91Nr+kzxPdvz/es6HC6uVdeep8R+xNVWUzj6TS4/GMaKUiCQtVHQj7IZWRxpyOZfVRND214caVPAYsg5mppSqX+8qZlJ/my5gf6RMlhse2ZTT0I8jzvz2nqWIqHiHCw4W9VCrFbXIqIbPYeKlrf1Tl63BT3JcM06TPSUX7HE+j/AATviXdw2VGZg19M2qqPEFWJt4T0yczs/gRRw6LlszAM++rEa7/hOnMcI0i7LPdKxYQhJkCMRREEURiFEwH0jdpGpWw1Nwt1JcixJDaBfDS5PmJvKlQKpZiAACSToABqSZ889q+JfxGKrVxfKznLf7gsq6cu6BNmgwrJkuS4RRmlxSfZx8Q1mPQm4/TziCoDFzixuRaPwGEeu4p0EZ3OyqrMfPQaDxOgnflNR5bKErXRGCOknwlB6rrTpqzMxsqqCWJ8vznoPBvorqMFbFVgnVEAZvIue6D5Bp6LwXs9h8IuXD0wpIsznvO39THW3ht4TBm8ShFVDl/otjhb7PGOOdjsRhKNOrVy3c2IU5sh3Cs22YjmLjQi+18s1Ig6fO+/j/vPpziOBSvSejUW6MLEfgR0INiPKeDdpOCvhq70nF7fVa2jKfqsPA/IgjlFo9V51xn2LInjdrozZuNxb0BHuI4N5ScraMyeAnSSoq3JiAX3YD3k9Kin2qoHkG/SQggfZHtHrWt9lfVZNCfPRcSjR/43/VJK+HoBb6t0uT8pTGMI+yg8l1/GLhCalQBhcAZiNtOQ8L/hc8opSjFcleyV3bNBwDFNSVFVVzMAdrP8MMSoz/Z33N9PMWZxyqhZ6tNsy5gGANwHUa2Nhfunew+qJUOZlexyq2r1PqggbKt9lA06mTPQprTKsFpqwGrHK7b2IU95tzy5zBOKvcuCV88mfxNWzN/MNfD+YeY+RlQdI6uCrFG3U5fQbelre87vYjgRxmLSnY5Ac1Q9EG/vt6ymc1GLkzUlS4PV/ou4H/D4MVXFnrWbbUIPqD1uW9RNqRcEHUSNWVbICosBpcCw5adIv8Qt7Zh7icaUnKTky+KpUfP/AG67PU8Jj2p0nHw3Q1FQG7Uwb9w+FwSP5fc5+nroP2J6T9MPCQxp4+lqV/yq2h+rqUby1ZSfFZ5gcRbVeY3nV0090FZTkVvg7uFZVFr/AJD97T1H6N6xvVQn7Kta/MEgm3qJ41RUsLsT5DQWmv7McZahWpsCScwDDUkoTqCfsix3OnOWaiO/G0iheiaZ7nCcDhvavDVmCB8rHYPlAJ6BgSt/C953pxGqNtiQjoQGRAxQYgjhGBjvpN4kaWCyKbGqwQ9co1Yeug8iZ4rUN735z0v6ZH72DXllrH1zUtfl855br1nd8Oio4b+WZMquRJSwgZ1RFLszBVUbsxNgB5mfQfZHgCYPDU6QC5yL1GAF2c6kX5gbDwE8++iXgueq+Lde7T7iE86jDvEf0qbeb+E9dExeIZ909kel3/0txRdWx0IRt5zi4dOB2s7Pri6BWwFRQTTbo33SfumwB9DynczCIagjjKUZKUe0KSUlTPm3F0CjsjghlJVgdwQbEe8qsZ6P9KnB1p1ExaED4jZHXqwUsGHmqm/l4mebOeR1M9Pps6y41L8mFwcZUxrNEZ7byCrV+6PXl/vDB03chR1uWtoBzPifCZ8+ujF7YcsvhhtXLhEuFRqrWUWAF2boNbeVz+fSa/g/ClVQoUsW1N9cxtu38vh+M4uHdVslPRRqdrnxPUm1/QDa07mD4mqMGbmLCxGg0ym3nIxcmt0nb/hmzyb9MejR0ezLuQXfIun1APiHwUnSnvut2/m5Dv4fguHpIRTooTubi7sRvmdrsx8SZV4dxZGVULAEAc+fWXVxen1l8N7zHkcm+SyG1KkVa3ZTB1XXENTDspuAQgTwRkUAMo2sb+su8MwGGw6uuHpCnmtnAzXNttSSSNZTbFqCSGtfcA6RjcQF97H0lLTfZbuSOya3M+8QYgec4TcQ6nSQvxJb72/fWG1i3o0mdW0YAg9f385iO1HYdGWpiMIAKgGY0zlCvluSVIAsxHuQNiSZ1E4qNCJ1MLjAwPTn5HeSjui7QKaZ4gKTN9ZvRf1nT4bh1U5wLlVJOpPIjXpfXWU+LD4FarQU3KO6X8FYgR2FxLKwRFz1XuMu4FxfvDmbX0uNN7TbLJCMbIuMpFdMWwI3uAPPae8/R9xNq/D6VR7llLJc7sENgb89LC/hPCeGBFqouLRzSIDXXKrsBmtlZtDfKV8/efQHZPimEr4ZP4EgU07mSxVkI1Ksp1vre+t73uZg1WRTiqX3L4R2s70IQmMtIhFBnMx/HcNQbJVrKjad2zE67bAwr8ewyJnault9GzN/pHe+UNyHtfwZLtthaWIrZKgLCn9UhmBUkKWtba9l8NJj17GIXAFV7XtYqhb9PDbcek7zceo4mvWaidMx0Nlciw+zzBtv+hE6PBaRevTyi+VlZv5RmuWPIA2PneaMeecY+l8EJRXujS9kcG9DCU6b0wmW4VAVJUdWYAAsTcnz9B2jUkLNGl5Q3btjolLxhqSFnkbVIhlhqkiatKr1ZC9aAFHtNwpMXTSnUdlyuHBUKTcKy21/q+U8Xx+BVcXWwis2jvTQ8yynu5rDnbUgc57iXnMxOHpq71FRA7CzOFQOw2szAXPrNOLUShFx9mQlBN2eK4fAOHZKgKleR58tOuvT57S4SPhtkGl7XFtTrYn/AFeyzudrcO6v8Yajn015nxtpMqmKIvzvL8EYv1Irk5Mso1g1vL0sBJqjWt5Sth6gOYsbEWO2/wCke9RbanfwuOvh1m2ylx5OnQxxG5sfX3nSo8TI1udv3pODh6ebW55W0H6y2tAjr7rItJ9lUkkdg8Y6sdow8VBPPruZzBTJ3W/iTbX8xLGFwlSqwSmmY72UM1uXK9pGoIjRaHEydbH5/vpEbiDkAhRY6X/e06X/AKMxY1IRbC474uSfs6Dfz00nF45wyphgBUZSCT9U25DkRtv7eMip4r4aJrHL4LWD4i7AFlGYsQLC2gOh/OdnD9oEpqWc2UIXN7bXso82Og8xML/iOVRfKABYBbtZfu3Nrk7cvnORxDiTVtCLLe9hqSbWBY6XsNBYAAbCV5skYr6luPBJyv2Lldy7VKqEPUZmZgDcqWJYsoI73pe255TmUqYLWdiAb5iFzHmdiRc38Y1F2kpJOp1PXn/vMykpO5GpJrhE4qAd0FmUE2DG2h52uQD5TS9lu0D4aqHXv2GUC57qk6jMb6b93Uak2vYjLYetl1CoT1cB7f2t3fcGTrUdzmNmP9aEn0veaV5clt6RCSkuj2z/ANwk+7/yH/uizxr/ADf+G3tFkf8AHw/JG8hpxxMjvVC2Y/ec1G8ybn9ZFVrfFuSWIHQEATXdoOzdGlZMNRZ3IBtdmJBNtAthYc7yvgOxuIcA1mWmvJFAJA8l0HuZw3CV8HXWWG22edJw1nqBUW92sL9b6T2jgdP4FClRp6KigWGgJ+01hzJuYmB7O0aA/wAtbtzdtWP5D0lv4ZEuimuzLkmpPgurjDHfxXWUli3k7K6LTYgSNqgkMSFhQ5mjI4CO+GekYiJpRxCXnU/hmMP4C+5gBm8RhAwIIBEy/EOx4OY0my3NyhuUJ8htPTP8MHUyN+Gr4/KSjOUeiLimeNP2YxKE2RT4o/5PaR1+DVl+tRbzUq3yB/KevV+HEbC/naUXwvUS9aqaIuCZ5nw/DuO7ke4/lYDw1OgnVw+BrM22VellJPrabM4UdIgoWjlqJMr8lEPZ6lkJV0U87lR85saDgFbCwNxppruNB4BpmUUg3E6X8XZC1iSneABFzYagX5kXHrKHKyyMaVHbrJcaTAdreEmoym15rzjRbeUcVUD6RJ10NqzBUeza2N1HkReUsR2JUm6XXyIt7NPR8NhhzE6VHCxubYJUeMVOxdUbN7r+jSu/ZSuPu+zj8jPfKeGHSTfwqncRbmPk+cKvAK6/Yv8A0sPwIhT4Y4/+pv7gT+c+g8TwWk4PdHtONiOzNjdBcQ3tByeQ/wCF1P8AhD/Sf+6E9W/wJ/un2hDewNc0baLHKJEkRMg6SJqfhLeWNKwEUzQ8In8LLmWLlhQyj/CRf4aXcsXJCgKq0hHhBJjTEAgjERiAkuQRcsAGWiMkkyxQIAVXpyu+HH3R8p0ssaU8IwOJWwnTSVmw5HKaFqUiegIhnAFOO+ECCCNCLHyM6tTCiVmoWgBURO6L6m1j5jQ/OOCSVUIv539/97xypEA6gkv0llekstoIATLJFkdOSLGIktC0VY6MQ20I68IAV8sAsdFiGNtDJHRTABmSFo4xIwEtFCxYoMBCZYZYt4hgAZYZYXheABligRLwvAB1oWiCLFQDSsYVksLRjIGSQtTlwrEyCIDntQ1Ht+f5GAw0vsg36axco6QCyitK0lUSxlHSKAOkKAiSSKI60cIAKsWJeLGIIQhACCLCEQxRFMIRiEiQhAAEWEIAEQwhAAhCEACLCEAFEIQjAUQhCJgEIQgMbU2PkYphCAhIsIQAWEIRDFEcIQjAIQhAR//Z"
        alt="Planeta terra"
      />
    );
}

export function TodoList() {
    return (
      <ul style={{
        backgroundColor: 'black',
        color: 'pink'
      }}>
        <li>Dispõe de 7 conjuntos de anéis circundantes e 82 luas, como Titã, a maior e mais conhecida</li>
        <li>Saturno possui 9 vezes o tamanho do planeta Terra</li>
      </ul>
    );
  }
  
  const person = {
    name: 'Planeta Terra',
    theme: {
      backgroundColor: 'black',
      color: 'pink'
    }
  };
  
  export function TodoListDois() {
    return (
      <div style={person.theme}>
        <h1>{person.name}</h1>
        <img
          className="avatar"
          src="data:image/jpeg;base64,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"
          alt="Gregorio Y. Zara"
        />
        <ul>
          <li>Improve the videophone</li>
          <li>Prepare aeronautics lectures</li>
          <li>Work on the alcohol-fuelled engine</li>
        </ul>
      </div>
    );
  }
  