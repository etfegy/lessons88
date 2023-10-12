const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");
const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");

let userMessage = null; // Variable to store user's message
const API_KEY = "PASTE-YOUR-API-KEY"; // Paste your API key here
const inputInitHeight = chatInput.scrollHeight;

const createChatLi = (message, className) => {
    // Create a chat <li> element with passed message and className
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", `${className}`);
    let chatContent = className === "outgoing" ? `<p></p>` : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message;
    return chatLi; // return chat <li> element
}
const generateResponse = (chatElement) => {
    var messageElement = chatElement;
    setTimeout(() => {
    if(userMessage == "السلام عليكم")
    {
        messageElement.textContent = "وعليكم السلام";
    }
    else if(userMessage == "باي")
    {
        messageElement.textContent = "باي";
    }
    else if(userMessage == "المهام")
    {
        messageElement.textContent =" تعتبر هذه الفعالية من أكثر الفعاليات انتشاراً وساتخداماً في الكورسات التي يتم تصميمها باستخدام نظام موودل من خلال هذه الفعالية يتمكن المعلم من ارسال مهمة للطلبة وجمع الأعمال التي قاموا بها وتقييمها والتعليق عليها ورصد درجات لكل طالب على حدة كما يمكن للطلاب إرسال أي محتوى من أي نوع مثل مستندات معالجة النصوص أو جداول البيانات أو الصور أو مقاطع الصوت والفيديو بالإضافة إلى ذلك  قد تتطلب المهمة من الطلاب كتابة النص مباشرة في محرر النصوص وهذا متاح أيضاً يمكن أيضًا استخدام المهام لتذكير الطلاب بمهام يحتاجون إكمالها في المنزل مثل تنفيذ نشاط معين وإحضاره معهم إلى المدرسة أي أن المهام يمكن استخدامها لأعمال لا تطلب أي محتوى رقمي أما عن تسليم المهام، فيمكن للطلاب تسليم العمل بشكل فردي أو كعضو في مجموعة في حال تم تقسيمهم إلى مجموعات ";
    }
    else if(userMessage == "قاعدة البيانات")
    {
        messageElement.textContent = "من خلال فعالية قاعدة البيانات، يمكن للمشاركين إنشاء مجموعة من الإدخالات والتعديل عليها والبحث عن معلومة معينة. طريقة الإدخال يتم تحديدها من قبل المعلم الذي أنشأ الفعالية، مثل عدد حقول الإدخال ونوعها؛ كأن تكون اختيار من متعدد أو أزرار لتحديد أو قائمة منسدلة أو منطقة نص عادي أو عنوان ويب أو صورة أو إرفاق ملفات";
    }
    else if(userMessage == "التغذية الراجعة")
    {
        messageElement.textContent = "تمكّن التغذية الراجعة المعلم من إنشاء استبيان مخصص لجمع التعليقات من المشاركين باستخدام مجموعة متنوعة من أنواع الأسئلة بما في ذلك الاختيار من متعدد، أو نعم/لا أو إدخال النص. يمكن للمعلم أن يتم إخفاء هوية المستجيبين للاستبيان، ويمكن عرض النتائج لجميع المشاركين أو للمعلمين فقط. يمكن أيضاً من خلال هذه الفعالية أن يجيب على الاستبيان أولئك الذين لم يسجلوا الدخول للموقع.";
    }
    else if(userMessage == "المنتدى")
    {
        messageElement.textContent = "يعتبر المنتدى من الفعاليات المنتشرة وكثيرة الاستخدام في مساقات موودل التعليمية. تتيح فعالية المنتدى للمشاركين إجراء مناقشات غير متزامنة، أي المناقشات التي تجري على مدى فترة زمنية طويلة ولا يشترط فيها أن يتم التواجد في نفس الوقت.";
    }
    else if(userMessage == "الدرس")
    {
        messageElement.textContent = "تمكّن فعالية الدرس المعلم من تقديم محتوى و/أو ممارسة أنشطة بطرق ممتعة ومرنة. يمكن للمعلم استخدام الدرس لإنشاء مجموعة خطية من صفحات المحتوى أو الأنشطة التعليمية التي تقدم مجموعة متنوعة من المسارات أو الخيارات للمتعلم. يمكن للمعلم اختيار زيادة التفاعل وضمان الفهم من خلال تضمين مجموعة متنوعة من الأسئلة، مثل الاختيار من متعدد والإجابة القصيرة والتي يتم توجيه الطالب إلى المرحلة التالية من الدرس بناء على إجابته عليها.";
    }
    else if(userMessage == "قاموس المصطلحات")
    {
        messageElement.textContent = "تُمكِّن فعالية قاموس المصطلحات المشاركين من إنشاء قائمة تعريفات، أو جمع الموارد أو المعلومات وتنظيمها. يستطيع المعلم السماح بإرفاق الملفات عند إدخال المصطلحات، بحيث يتم عرض الصور والملفات المرفقة في الإدخال. يمكن البحث في المقالات أو تصفحها أبجديًا أو حسب الفئة أو التاريخ أو المؤلف. هناك نوعان من طرق الموافقة على إضافة مصطبح؛ أوتوماتيكياً أو أن يوافق المعلم على الإضافة.";
    }
    else if(userMessage == "الاختبارات")
    {
        messageElement.textContent = "نظام الاختبارات الإلكترونية في موودل قد يكون النظام الأقوى والأوسع على مستوى العالم لما فيه من خيارات متعددة ومرونة هائلة. يتيح الاختبار للمعلم إنشاء اختبارات تتضمن أسئلة من أنواع مختلفة تصل إلى 15 نوع من الأسئلة، بما في ذلك الاختيار من متعدد، والتوصيل والمطابقة، والإجابة القصيرة، والإجابات الرقمية أو العددية. يمكن للمعلم أن يسمح للطلبة تقديم الاختبار أكثر من مرة. كما يمكن له خلط الأسئلة أو اختيار عشوائي لأسئلة من بنك أسئلة معدّ مسبقاً، كما يستطيع المعلم تحديد وقت للاختبار بحيث يظهر أمام الطالب طوال فترة الاختبار على شكل عداد تنازلي. يتم وضع علامة على كل محاولة تلقائيًا، باستثناء أسئلة المقالات، ويتم تسجيل الدرجة في دفتر التقديرات الخاص بالمساق. يمكن للمدرس أن يختار متى وأين تظهر التغذية الراجعة لكل سؤال من تعليقات وتلميحات وتعليمات، كما يمكنه تعبئة الإجابات الصحيحة ليتمكن الطالب عند مراجعة الاختبار من معرفة إجابته والإجابة النموذجية";
    }
    else if(userMessage == "مساعدة")
    {
        messageElement.textContent = "https://www.qodoraat.com/?app=article.show.72";

    }
    else
    {
            messageElement.classList.add("خطئ");
            messageElement.textContent = "معذرة لم افهم جرب بعبارة آخرى";
            chatbox.scrollTo(0, chatbox.scrollHeight);
    }
}, 600);

}

const handleChat = () => {
    userMessage = chatInput.value.trim(); // Get user entered message and remove extra whitespace
    if(!userMessage) return;

    // Clear the input textarea and set its height to default
    chatInput.value = "";
    chatInput.style.height = `${inputInitHeight}px`;

    // Append the user's message to the chatbox
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);
    
   
        // Display "Thinking..." message while waiting for the response
        const incomingChatLi = createChatLi("...تفكير", "incoming");
        chatbox.appendChild(incomingChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
        generateResponse(incomingChatLi);
}

chatInput.addEventListener("input", () => {
    // Adjust the height of the input textarea based on its content
    chatInput.style.height = `${inputInitHeight}px`;
    chatInput.style.height = `${chatInput.scrollHeight}px`;
});

chatInput.addEventListener("keydown", (e) => {
    // If Enter key is pressed without Shift key and the window 
    // width is greater than 800px, handle the chat
    if(e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
        e.preventDefault();
        handleChat();
    }
});

sendChatBtn.addEventListener("click", handleChat);
closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));