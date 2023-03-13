export const data = {
  firstPageIsStarted: true,
  startSurveyText: "إبدء الاستبيان",
  // --------- show preview page before submitting the data
  showPreviewBeforeComplete: "showAnsweredQuestions",
  previewText: "معاينة الردود",
  pages: [
    {
      elements: [
        {
          type: "html",
          html: "<h2>السلام عليكم ورحمة الله وبركاته</h2>",
        },
      ],
    },
    {
      elements: [
        {
          name: "q1_co_name",
          title: "اسم الشركة",
          type: "text",
          isRequired: true,
        },
      ],
    },
    {
      elements: [
        {
          name: "q1_co_name",
          title: "اسم الشركة",
          type: "text",
          isRequired: true,
        },
      ],
    },
    {
      elements: [
        {
          name: "q2_co_activity",
          title: "نشاط الشركة",
          type: "text",
          isRequired: true,
        },
      ],
    },
    {
      elements: [
        {
          name: "q3_commercial_registration_no",
          title: "رقم السجل التجاري",
          type: "text",
          validators: [
            {
              type: "regex",
              regex: "[0-9]",
              text: "برجاء إدخال ارقام فقط",
            },
          ],
          isRequired: true,
        },
      ],
    },
    {
      elements: [
        {
          name: "q4_release_date",
          title: "تاريخ الإصدار",
          type: "text",
          inputType: "date",
          isRequired: true,
        },
      ],
    },
    {
      elements: [
        {
          name: "q5_expire_date",
          title: "تاريخ الانتهاء",
          type: "text",
          inputType: "date",
          isRequired: true,
        },
      ],
    },
    {
      elements: [
        {
          name: "q6_zaka_and_income",
          title: "هل منشأتك خاضعة لتنظيم هيئة الزكاة و الدخل؟",
          type: "radiogroup",
          choices: ["نعم", "لا"],
          separateSpecialChoices: true,
          isRequired: true,
        },
      ],
    },
    {
      elements: [
        {
          name: "q7_zaka_and_income_no",
          title: "رقم منشأتك في هيئة الزكاة والدخل",
          type: "text",
          isRequired: true,
          visibleIf: '{q6_zaka_and_income} = "نعم"',
        },
      ],
    },
    {
      elements: [
        {
          name: "q8_co_license_no",
          title:
            "رقم الترخيص في حال كان نشاطك أو كيان منشأتك يستلزم إصدار تراخيص",
          type: "text",
          isRequired: false,
        },
      ],
    },
    {
      elements: [
        {
          name: "q9_co_activities",
          title: "حدد هوية منشأتك",
          type: "radiogroup",
          colCount: 1,
          choices: ["شركة محلية سعودية", "استثمار أجنبي"],
          separateSpecialChoices: true,
          isRequired: true,
        },
      ],
    },
    {
      elements: [
        {
          name: "q10_foreign_investment",
          title: "هل منشأتك خاضعة لتنظيم هيئة الاستثمار الأجنبي؟",
          type: "radiogroup",
          choices: ["نعم", "لا"],
          separateSpecialChoices: true,
          isRequired: true,
        },
      ],
    },
    {
      elements: [
        {
          name: "q11_foreign_investment_license_no",
          title: "رقم الترخيص",
          type: "text",
          isRequired: true,
        },
      ],
      visibleIf: '{q10_foreign_investment} = "نعم"',
    },
    {
      elements: [
        {
          name: "q12_release_date_of_foreign_investment",
          title: "تاريخ الإصدار",
          type: "text",
          inputType: "date",
          isRequired: true,
        },
      ],
      visibleIf: '{q10_foreign_investment} = "نعم"',
    },
    {
      elements: [
        {
          name: "q13_expire_date_of_foreign_investment",
          title: "تاريخ الانتهاء",
          type: "text",
          inputType: "date",
          isRequired: true,
        },
      ],
      visibleIf: '{q10_foreign_investment} = "نعم"',
    },
    {
      elements: [
        {
          name: "q14_co_members",
          title: "حدد كيان الشركة؟",
          type: "radiogroup",
          colCount: 1,
          choices: ["شخص واحد", "عدة اشخاص"],
          separateSpecialChoices: true,
          isRequired: true,
        },
      ],
    },
    {
      elements: [
        {
          name: "q15_co_members_no",
          title: "عدد الاشخاص في شركتك",
          type: "text",
          inputType: "number",
          isRequired: true,
          visibleIf: "{q14_co_members} = 'عدة اشخاص'",
        },
      ],
    },
    {
      elements: [
        {
          name: "q16_co_owner",
          title: "اسم مالك الشركة",
          type: "text",
          isRequired: true,
        },
      ],
    },
    {
      elements: [
        {
          name: "q17_co_commissioner",
          title: "اسم المفوض بإدارة الشركة (ان وجد)",
          type: "text",
          isRequired: false,
        },
      ],
    },
    {
      elements: [
        {
          name: "q18_co_departments",
          title: "عدد الإدارات الفعالة الموجودة  في المنشأة؟",
          type: "checkbox",
          choices: [
            "الإدارة التنفيذية",
            "الإدارة القانونية",
            "الإدارة العامة",
            "إدارة بشؤون الموظفين",
            "الإدارة التسويقية",
            "إدارة المبيعات",
            "الإدارة الإنتاجية",
            "الإدارة المالية",
            "إدارة خدمة العملاء",
          ],
          colCount: 2,
          showOtherItem: true,
          separateSpecialChoices: true,
          isRequired: true,
        },
      ],
    },
    {
      elements: [
        {
          name: "q19_co_age",
          title: "حدد المرحلة العمرية لمنشأتك",
          type: "radiogroup",
          colCount: 1,
          choices: ["التأسيس", "النمو والابتكار", "التوسع و الانتشار"],
          separateSpecialChoices: true,
          isRequired: true,
        },
      ],
    },
    {
      elements: [
        {
          name: "q20_co_branches",
          title: "عدد فروع الشركة؟",
          type: "text",
          min: 0,
          max: 50,
          inputType: "number",
          isRequired: true,
        },
      ],
    },
    {
      elements: [
        {
          name: "q21_co_goals",
          title: "ما هي أهداف الشركة؟",
          type: "comment",
          isRequired: true,
        },
      ],
    },
    {
      elements: [
        {
          name: "q22_co_challenges",
          title: "ما هي المشاكل بوجهة نظرك التي تواجه الشركة؟",
          type: "comment",
          isRequired: true,
        },
      ],
    },
    {
      elements: [
        {
          name: "q23_dev_chance",
          title: "هل تؤمن بوجود فرصة للتطور الإداري للشركة؟",
          type: "radiogroup",
          choices: ["نعم", "لا"],
          separateSpecialChoices: true,
          isRequired: true,
        },
      ],
    },
    {
      elements: [
        {
          name: "q24_co_marketing_plan",
          title: "هل هناك خطة تسويقية للشركة؟ يرجى ذكرها؟",
          type: "comment",
          isRequired: true,
        },
      ],
    },
    {
      elements: [
        {
          name: "q25_thing_to_be_developed",
          title: "اذا كان  يوجد فرصة للتطوير ما هو الشيء المراد تطويره؟",
          type: "comment",
          isRequired: true,
        },
      ],
    },
    {
      elements: [
        {
          name: "q26_move_headquarters",
          title: "هل تنوي نقل مقر الشركة إلى مكان آخر؟",
          type: "radiogroup",
          choices: ["نعم", "لا"],
          separateSpecialChoices: true,
          isRequired: true,
        },
      ],
    },
    {
      elements: [
        {
          name: "q27_suggested_places",
          title: "إذا كانت الإجابة بنعم يرجى تزويدنا بالأماكن المقترحة؟",
          type: "comment",
          isRequired: false,
        },
      ],
    },
    {
      elements: [
        {
          name: "q28_co_profits",
          title: "هل أنت راضي عن أرباح الشركة؟",
          type: "radiogroup",
          choices: ["نعم", "لا"],
          separateSpecialChoices: true,
          isRequired: true,
        },
      ],
    },
    {
      elements: [
        {
          name: "q29_encounter_a_problem",
          title: "اذا واجهتك مشكلة هل تقوم بحلها بـ؟",
          type: "radiogroup",
          choices: ["نفسك", "شركات متخصصة", "أصدقاء ذات اختصاص"],
          separateSpecialChoices: true,
          isRequired: true,
        },
      ],
    },
    {
      elements: [
        {
          name: "q30_interact_with_employees",
          title: "كيف يتم التفاعل مع الموظفين؟",
          type: "comment",
          isRequired: true,
        },
      ],
    },
    {
      elements: [
        {
          name: "q31_now_vs_3y_ago",
          title: "برأيك ما هو حجم شركتك الآن بالمقارنة بثلاث سنوات الماضية؟",
          type: "radiogroup",
          choices: ["مرتفع", "متوسط", "منخفض"],
          showOtherItem: true,
          separateSpecialChoices: true,
          isRequired: true,
        },
      ],
    },
    {
      elements: [
        {
          name: "q32_admin_org",
          title:
            "هل يوجد تنظيم إداري للشركة؟ إذا كانت الإجابة نعم ارجوا تزويدنا بصورة من الهيكل التنظيمي؟",
          type: "comment",
          isRequired: true,
        },
      ],
    },
    {
      elements: [
        {
          name: "q33_co_decisions",
          title:
            "حدد درجة امتثال منشأتك للأنظمة وقرارات وزارة العمل و الموارد البشرية",
          type: "radiogroup",
          choices: ["ممتاز", "جيد", "ضعيف"],
          separateSpecialChoices: true,
          isRequired: true,
        },
      ],
    },
    {
      elements: [
        {
          name: "q34_competitors_market",
          title: "أين تضع نفسك في سوق المنافسين؟",
          type: "comment",
          isRequired: true,
        },
      ],
    },
    {
      elements: [
        {
          name: "q35_co_marketing",
          title: "كيف تسوق لشركتك؟",
          type: "comment",
          isRequired: true,
        },
      ],
    },
    {
      elements: [
        {
          name: "q36_closing_the_co",
          title: "هل تفكر في إقفال الشركة أو تغيير النشاط؟",
          type: "radiogroup",
          choices: ["نعم", "لا"],
          separateSpecialChoices: true,
          isRequired: true,
        },
      ],
    },
    {
      elements: [
        {
          name: "q37_annual_turnover",
          title: "ما هو معدل دوران رأس المال سنويا؟",
          type: "comment",
          isRequired: true,
        },
      ],
    },
    {
      elements: [
        {
          name: "q38_info_leaked",
          title: "هل سبق وتعرضت لتسريب معلومات الشركة؟",
          type: "radiogroup",
          choices: ["نعم", "لا"],
          separateSpecialChoices: true,
          isRequired: true,
        },
      ],
    },
    {
      elements: [
        {
          name: "q39_info_leaked_details",
          title: "اذا كان نعم في أي إدارة تم التسريب؟",
          type: "comment",
          isRequired: false,
        },
      ],
    },
    {
      elements: [
        {
          name: "q40_three_biggest_clients",
          title: "من هم أكبر ثلاث عملاء لديكم؟",
          type: "comment",
          isRequired: true,
        },
      ],
    },
    {
      elements: [
        {
          name: "q41_sales_percentage",
          title: "كم تمثل نسبة مبيعاتكم؟",
          type: "text",
          inputType: "number",
          isRequired: true,
        },
      ],
    },
    {
      elements: [
        {
          name: "q42_co_business_strategy",
          title: "ماهي استراتيجية عمل الشركة؟",
          type: "comment",
          isRequired: true,
        },
      ],
    },
    {
      elements: [
        {
          name: "q43_co_experience",
          title: "هل لديك خبرة في مجال الشركة؟",
          type: "comment",
          isRequired: true,
        },
      ],
    },
    {
      elements: [
        {
          name: "q44_co_loss",
          title:
            "إذا حصل لا سمح الله خسارة في الشركة هل تتحملها أم يتحملها الموظفين؟ ولماذا؟ ",
          type: "comment",
          isRequired: true,
        },
      ],
    },
    {
      elements: [
        {
          name: "q45_meet_peers",
          title: "هل تقابل أشخاص من مجال عملك كثير؟",
          type: "radiogroup",
          choices: ["نعم", "لا"],
          separateSpecialChoices: true,
          isRequired: true,
        },
      ],
    },
    {
      elements: [
        {
          name: "q46_admin_style",
          title: "ما هو الأسلوب الإداري الذي تتبعه؟",
          type: "comment",
          isRequired: true,
        },
      ],
    },
    {
      elements: [
        {
          name: "q47_work_before_co",
          title: "أين كنت تعمل قبل فتح شركتك؟",
          type: "text",
          isRequired: true,
        },
      ],
    },
    {
      elements: [
        {
          name: "q48_employee_qualities",
          title: "ماهي صفات الموظف المثالي برأيك؟",
          type: "comment",
          isRequired: true,
        },
      ],
    },
    {
      elements: [
        {
          name: "q49_employees_privileges",
          title: "هل تفوض الصلاحيات للموظفين والإدارات؟",
          type: "radiogroup",
          choices: ["نعم", "لا"],
          separateSpecialChoices: true,
          isRequired: true,
        },
      ],
    },
    {
      elements: [
        {
          name: "q50_private_employee_problems",
          title: "هل تساعد في حل مشاكل الموظفين الخاصة؟",
          type: "radiogroup",
          choices: ["نعم", "لا"],
          separateSpecialChoices: true,
          isRequired: true,
        },
      ],
    },
    {
      elements: [
        {
          name: "q51_reward_employees",
          title: " كيف تكافئ موظفيك؟",
          type: "comment",
          isRequired: true,
        },
      ],
    },
    {
      elements: [
        {
          name: "q52_employee_several_jobs",
          title: "هل كل موظف لديه عمل واحد فقط أو عدة أعمال؟",
          type: "radiogroup",
          choices: ["واحد فقط", "عدة أعمال"],
          separateSpecialChoices: true,
          isRequired: true,
        },
      ],
    },
    {
      elements: [
        {
          name: "q53_employees_number_of_co",
          title: "ما هو مجموع العاملين في منشأتك؟",
          type: "text",
          inputType: "number",
          min: 0,
          separateSpecialChoices: true,
          isRequired: true,
        },
      ],
    },
    {
      elements: [
        {
          name: "q54_compliance_percentage",
          title: "حدد نسبة امتثالك للتوطين؟",
          type: "text",
          inputType: "number",
          min: 0,
          separateSpecialChoices: true,
          isRequired: true,
        },
      ],
    },
    {
      elements: [
        {
          name: "q55_co_jan_range",
          title: "حدد نطاق منشأتك من شهر يناير 2023",
          type: "radiogroup",
          choices: [
            "أحمر",
            "أخضر منخفض",
            "اخضر متوسط",
            "أخضر مرتفع",
            "بلاتيني",
          ],
          separateSpecialChoices: true,
          isRequired: true,
        },
      ],
    },
    {
      elements: [
        {
          name: "q56_co_business_activity",
          title: "حدد حجم نشاط منشاتك",
          type: "radiogroup",
          choices: [
            "صغيرة (فئة أ)",
            "صغيرة (فئة ب)",
            "متوسطة (فئة أ)",
            "متوسطة (فئة ب)",
            "متوسطة (فئة ج)",
            "كبيرة",
            "عملاقة",
          ],
          separateSpecialChoices: true,
          isRequired: true,
        },
      ],
    },
    {
      elements: [
        {
          name: "q57_dev_training_programs",
          title: "هل تقدم برامج تدريبية تطويرية للموظفين؟",
          type: "radiogroup",
          choices: ["نعم", "لا"],
          separateSpecialChoices: true,
          isRequired: true,
        },
      ],
    },
    {
      elements: [
        {
          name: "q58_level_of_production",
          title: "كيف تقييم مستوى انتاج فريق عملك؟",
          type: "comment",
          isRequired: true,
        },
      ],
    },
    {
      elements: [
        {
          name: "q59_interfere_work",
          title: "هل تتدخل في عمل الإدارات الأخرى؟",
          type: "radiogroup",
          choices: ["نعم", "لا"],
          separateSpecialChoices: true,
          isRequired: true,
        },
      ],
    },
    {
      elements: [
        {
          name: "q60_financial_problems",
          title: "عند حدوث مشاكل مالية هل تقلل  من؟",
          type: "radiogroup",
          choices: ["موظفيك", "رواتبهم"],
          separateSpecialChoices: true,
          isRequired: true,
        },
      ],
    },
    {
      elements: [
        {
          name: "q61_max_sales_no",
          title: "ما هو أقصى رقم مبيعات تود الوصول إليه؟",
          type: "text",
          isRequired: true,
        },
      ],
    },
    {
      elements: [
        {
          name: "q62_current_method_enough",
          title: "هل الأسلوب الحالي كفيل بإيصالك لهذا الرقم؟",
          type: "radiogroup",
          choices: ["نعم", "لا"],
          separateSpecialChoices: true,
          isRequired: true,
        },
      ],
    },
    {
      elements: [
        {
          name: "q63_irreplaceable_employee",
          title: "من الموظف الذي لا يمكن الاستغناء عنه؟",
          type: "text",
          isRequired: true,
        },
      ],
    },
    {
      elements: [
        {
          name: "q64_leave_last_job",
          title: "لماذا تركت عملك السابق؟",
          type: "comment",
          isRequired: true,
        },
      ],
    },
    {
      elements: [
        {
          name: "q65_keep_promises",
          title: "هل تؤمن بالوعود التي تعطيها للغير؟",
          type: "text",
          isRequired: true,
        },
      ],
    },
    {
      elements: [
        {
          name: "q66_personal_money_co",
          title:
            "إذا حصلت خسارة لا سمح الله هل تخرج من مالك الشخصي لدعم الشركة؟",
          type: "radiogroup",
          choices: ["نعم", "لا"],
          separateSpecialChoices: true,
          isRequired: true,
        },
      ],
    },
    {
      elements: [
        {
          name: "q67_deal_work_pressures",
          title: "كيف تتعامل مع ضغوط العمل والالتزامات؟",
          type: "comment",
          isRequired: true,
        },
      ],
    },
    {
      elements: [
        {
          name: "q68_characterizes_co",
          title: "بماذا تتميز شركتك؟",
          type: "comment",
          isRequired: true,
        },
      ],
    },
    {
      elements: [
        {
          name: "q69_strengths_of_sales",
          title: "ماهي نقاط القوة في مبيعاتك أو الأكثر استهلاك؟",
          type: "comment",
          isRequired: true,
        },
      ],
    },
    {
      elements: [
        {
          name: "q70_sales_unability",
          title: "هل سبق أن شعرت أنك عاجز عن تحقيق أي مبيعات؟",
          type: "radiogroup",
          choices: ["نعم", "لا"],
          separateSpecialChoices: true,
          isRequired: true,
        },
      ],
    },
    {
      elements: [
        {
          name: "q71_overcome_sales_unability",
          title: "كيف تتجاوز ذلك؟",
          type: "comment",
          isRequired: true,
        },
      ],
      visibleIf: '{q71_overcome_sales_unability} = "نعم"',
    },
    {
      elements: [
        {
          name: "q72_new_employees",
          title:
            "هل تعتقد أنك بحاجة الى موظفين أو الخبرات جديدة في قسم المبيعات؟",
          type: "comment",
          isRequired: true,
        },
      ],
    },
    {
      elements: [
        {
          name: "q73_best_department",
          title:
            "هل تعتقد أن إدارة المبيعات لديك تصنف من أفضل الإدارة في منشأتك؟",
          type: "radiogroup",
          choices: ["نعم", "لا"],
          separateSpecialChoices: true,
          isRequired: true,
        },
        {
          name: "q74_best_department_why",
          title: "لماذا؟",
          type: "comment",
          isRequired: true,
          visibleIf: '{q73_best_department} = "نعم"',
        },
      ],
    },
  ],
};
