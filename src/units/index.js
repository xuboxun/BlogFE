
import Vue from 'vue';
import Icon from 'vue-awesome/components/Icon';
import 'vue-awesome/icons';

import Button from '@/units/Button';
import Collapse from '@/units/Collapse';
import Divider from '@/units/Divider';
import Dropdown from '@/units/Dropdown';
import LocateBar from '@/units/LocateBar';
import MarkdownEditor from '@/units/MarkdownEditor';
import MarkdownView from '@/units/MarkdownView';
import Modal from '@/units/Modal';
import Pager from '@/units/Pager';
import Selector from '@/units/Selection';
import Table from '@/units/Table';
import Tag from '@/units/Tag';
import Timeline from '@/units/Timeline';
import Input from '@/units/Input';
import Select from '@/units/Select';
import FormItem from '@/units/FormItem';
import Verify from '@/units/Verify';
import ImgViewer from '@/units/ImgViewer';


const components = {
    Button,
    Collapse,
    Divider,
    Dropdown,
    LocateBar,
    MarkdownEditor,
    MarkdownView,
    Modal,
    Pager,
    Selector,
    Table,
    Tag,
    Timeline,
    Icon,
    Input,
    Select,
    FormItem,
    Verify,
    ImgViewer
};


Object.keys(components).forEach(key => {
    Vue.component(key, components[key]);
});
